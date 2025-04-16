const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const Product = require("./models/product");
const { productSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const Cart = require("./models/cart");
const Order = require("./models/order");
const Review = require("./models/review");
const { validateProduct, isLoggedIN, saveRedirectUrl, isOwner, validateReview, isReviewAuthor } = require("./middleware"); // Importing all middleware from middleware.js

// Connect to MongoDB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fotron");
}
main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

// Setting up the app
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Session Store Configuration
const store = MongoStore.create({
    mongoUrl: "mongodb://127.0.0.1:27017/fotron",
    secret: "yourSecretHere",
    touchAfter: 24 * 3600 
});

store.on("error", (err) => {
    console.log("Error in Mongo Store:", err);
});

const sessionOption = {
    store,
    secret: process.env.SECRET || 'secretKey', 
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash and current user middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Root route
app.get("/", (req, res) => {
    res.send("Root is working");
});

// Combined products route (all products and filtered products)
app.get("/products", async (req, res) => {
    const { category, type, organic } = req.query;
    try {
        const { category } = req.query;
      
        let filterCriteria = {};
      
        if (category) {
          filterCriteria.category = category;
        }
        // Handle Organic filtering FIRST
        if (organic === 'true') {
            filterCriteria.type = 'Organic';
        } else if (type && type !== 'Organic') { // Only filter by type if organic is NOT selected
            filterCriteria.type = type;
        }

        const products = await Product.find(filterCriteria)
            .populate({ path: "reviews", populate: { path: "author" } })
            .populate("owner");

        console.log("Filter Criteria:", filterCriteria);

        res.render("products/index.ejs", {
            allProducts: products,
            selectedCategory: category,
            selectedType: type,
        });
    } catch (err) {
        console.error("Error fetching products:", err);
        req.flash("error", "Error fetching products.");
        res.redirect('/products');
    }
});

// route for all product in perticular category
app.get("/categories", async (req, res) => {
    const { category, type } = req.query;
    let filterCriteria = {};

    if (category) {
        filterCriteria.category = category;
    }

    if (type) {
        filterCriteria.type = type;
    }

    try {
        const products = await Product.find(filterCriteria);

        res.render("categories/index.ejs", { 
            allProducts: products, 
            selectedCategory: category,
            selectedType: type,
        });
    } catch (err) {
        console.error("Error fetching products:", err);
        req.flash("error", "Error fetching products.");
        res.redirect("/");
    }
});


// Create a new product (GET form)
app.get("/products/new", (req, res) => {
    res.render("products/new.ejs");
});

// search button route
app.get("/products/search", async (req, res) => {
    const { query } = req.query;
    try {
        if (!query) {
            req.flash("error", "Please enter a search term.");
            return res.redirect("/products");
        }
        const products = await Product.find({
            title: { $regex: query, $options: "i" } 
        });

        if (products.length === 0) {
            req.flash("error", `No products found for "${query}"`);
            return res.redirect("/products");
        }

        res.render("products/searchResults.ejs", {
            products,
            searchQuery: query
        });
    } catch (err) {
        console.error("Error during product search:", err);
        req.flash("error", "An error occurred while searching.");
        res.redirect("/products");
    }
});

// Create a new product
app.post("/products", isLoggedIN, validateProduct, wrapAsync(async (req, res) => {
    console.log("Request body:", req.body);
    try {
        const { title, description, image, price, location, category, type, tags, isFeatured } = req.body;
        const owner = req.user._id;

        if (!image || !/^https?:\/\//i.test(image)) {
            return res.status(400).send("Invalid image URL.");
        }

        const newProduct = new Product({
            title,
            description,
            image: {
                url: image,
                filename: image.split('/').pop() || "placeholder_filename"
            },
            price,
            location,
            category,
            type,
            tags: tags ? tags.split(',') : [],
            isFeatured: isFeatured === 'true',
            owner
        });

        await newProduct.save();
        req.flash('success', 'Successfully made a new product!');
        res.redirect("/products");
    } catch (err) {
        console.error("Error saving the product:", err);

        if (err.name === 'ValidationError') {
            return res.status(400).send(`Validation Error: ${err.message}`);
        }

        res.status(500).send("Internal Server Error: Unable to save the product.");
    }
}));


app.post('/cart/add/:productId', async (req, res) => {
    const productId = req.params.productId;
    const { quantity } = req.body; 
    const parsedQuantity = parseInt(quantity, 10); 

    if (!parsedQuantity || parsedQuantity < 1) {
        return res.status(400).send("Invalid quantity");
    }

    try {
        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = new Cart({ user: req.user._id, items: [] });
            await cart.save();
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        const existingItem = cart.items.find(item => item.product.toString() === productId);

        if (existingItem) {
            existingItem.quantity += parsedQuantity;
            existingItem.totalPrice = existingItem.quantity * product.price;
        } else {
            const item = {
                product: product._id,
                quantity: parsedQuantity,
                totalPrice: parsedQuantity * product.price,
            };
            cart.items.push(item);
        }
        await cart.save();

        res.redirect('/cart');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding product to cart");
    }
});

// View individual product details
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate({
                path: 'reviews',
                populate: {
                    path: 'author', 
                    select: 'username'
                }
            });

        if (!product) {
            return res.status(404).send('Product not found');
        }

        res.render('products/show', { product });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


// Review routes
app.post('/products/:id/reviews', async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, comment } = req.body.review;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        const review = new Review({
            rating,
            comment,
            author: req.user._id 
        });

        await review.save();

        product.reviews.push(review);
        await product.save();

        res.redirect(`/products/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Review delete route
app.delete("/products/:id/reviews/:reviewId", isLoggedIN, isReviewAuthor, wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/products/${id}`);
}));

// Authentication routes
app.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
}); 

// Signup route
app.post("/signup", saveRedirectUrl, wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        console.log(newUser);
        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Fotron!");
            res.redirect("/products");
        });
        
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

// Authentication routes
app.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// Login route
app.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), async (req, res) => {
    req.flash("success", "Welcome back to Fotron");
    let redirectUrl = res.locals.redirectUrl || "/products";
    res.redirect(redirectUrl);
});

// Logout route
app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/products");
    });
});

// View individual product details
app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id)
            .populate({ path: "reviews", populate: { path: "author" } })
            .populate("owner");

        if (!product) {
            req.flash("error", "Product not found!");
            return res.redirect("/products");
        }

        res.render("products/show.ejs", { product });
    } catch (err) {
        console.log(err);
        req.flash("error", "Error fetching product details.");
        res.redirect("/products");
    }
});

// View Cart Route
app.get("/cart", isLoggedIN, async (req, res) => {
    const userId = req.user._id; 
    try {
        const cart = await Cart.findOne({ user: userId }).populate({
            path: 'items.product',
            select: 'title image.url price size',
          }).exec();

        if (!cart) {
            return res.render("cart/viewCart", { cart: null });
        }
        cart.items = cart.items.filter(item => item.product);
        res.render("cart/viewCart", { cart });
    } catch (err) {
        console.error("Error viewing cart:", err);
        req.flash("error", "Unable to fetch cart items.");
        res.redirect("/products");
    }
});


// Update Quantity in Cart Route
app.post("/cart/update/:itemId", isLoggedIN, async (req, res) => {
    const itemId = req.params.itemId;
    const newQuantity = req.body.quantity;
    console.log("User:", req.user);
    
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        console.log("Cart:", cart);

        if (!cart) {
            return res.status(404).send("Cart not found");
        }

        const item = cart.items.id(itemId);

        if (!item) {
            return res.status(404).send("Item not found in cart");
        }
        item.quantity = newQuantity;
        const product = await Product.findById(item.product);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        item.totalPrice = item.quantity === '250gm' ? 250 * product.price / 1000 : 
                          item.quantity === '500gm' ? 500 * product.price / 1000 : 
                          product.price;

        await cart.save();
        res.redirect("/cart");
    } catch (err) {
        console.error("Error updating cart:", err);
        req.flash("error", "Unable to update cart item.");
        res.redirect("/cart");
    }
});


// Remove Product from Cart Route
app.delete('/remove/:productId', async (req, res) => {
    try {
      const userId = req.user._id; 
      const { productId } = req.params;
  
      const cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' }); 
      }
  
      cart.items = cart.items.filter(item => item.product.toString() !== productId);
  
      await cart.save();
  
      res.status(200).json({ message: 'Product removed from cart successfully' });
  
    } catch (error) {
      console.error('Error removing product from cart:', error);
      res.status(500).json({ message: 'Failed to remove product from cart. Please try again later.' });
    }
  });

// Checkout Route
app.post("/checkout", isLoggedIN, async (req, res) => {
    const userId = req.user._id;

    try {
        const cart = await Cart.findOne({ user: userId }).populate("items.product");

        if (!cart || cart.items.length === 0) {
            req.flash("error", "Your cart is empty.");
            return res.redirect("/cart");
        }
        const order = new Order({
            user: userId,
            items: cart.items.map(item => ({
                product: item.product._id,
                quantity: item.quantity,
                price: item.product.price,
            })),
            total: cart.items.reduce((sum, item) => sum + (item.quantity * item.product.price), 0),
            status: "Pending",
        });

        await order.save();
        await Cart.findOneAndDelete({ user: userId });

        req.flash("success", "Checkout successful. Order placed!");
        res.render("checkout/success", { order });

    } catch (err) {
        console.error("Error during checkout:", err);
        req.flash("error", "Error during checkout.");
        res.redirect("/cart");
    }
});

// GET route to render the edit profile form
app.get('/profile/edit', async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('users/editProfile.ejs', { user });
    } catch (error) {
        console.error('Error fetching user for edit:', error);
        res.status(500).send('Server error');
    }
});

// POST route to update the user's profile
app.post('/profile/edit', async (req, res) => {
    try {
        const { name, email, street, city, state, zip } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user._id,
            {
                name,
                email,
                address: {
                    street: street || "N/A",
                    city: city || "N/A",
                    state: state || "N/A",
                    zip: zip || "N/A",
                },
            },
            { new: true, runValidators: true }
        );
        res.redirect('/profile'); 
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).send('Server error');
    }
});

// Profile route
app.get('/profile', (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    }
    res.render("users/profile.ejs", { user: req.user });
});

// Help route
app.get('/help', (req, res) => {
    res.render("users/help.ejs");
});

// Catch-all error handling route
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.render("products/error.ejs", { err });
});

// Server listening
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
