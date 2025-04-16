const Product = require('./models/product');
const Review = require("./models/review");
const { productSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

module.exports.validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body.product); 
    if (error) {
      const msg = error.details.map(el => el.message).join(', ');
      return res.status(400).send(msg); 
    }
    next();
  };

module.exports.isLoggedIN = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a product.");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        req.flash("error", "Product not found!");
        return res.redirect("/products");
    }
    if (!product.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this product.");
        return res.redirect(`/products/${id}`);
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review) {
        req.flash("error", "Review not found!");
        return res.redirect(`/products/${id}`);
    }
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You are not the author of this review.");
        return res.redirect(`/products/${id}`);
    }
    next();
};
