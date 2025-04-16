const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            totalPrice: {
                type: Number,
                default: 0 
            }
        }
    ],
    totalAmount: {
        type: Number,
        default: 0
    }
});
cartSchema.methods.updateTotalAmount = function () {
    this.totalAmount = this.items.reduce((total, item) => total + item.totalPrice, 0);
};
cartSchema.pre('save', async function (next) {
    try {
        const productPromises = this.items.map(async (item) => {
            try {
                const product = await mongoose.model("Product").findById(item.product);
                return { item, product };
            } catch (err) {
                console.error("Error finding product:", err);
                return { item, product: null };
            }
        });

        const results = await Promise.all(productPromises);

        // Filter out items with missing products
        this.items = results
            .filter(({ product }) => product) // Only keep items with valid products
            .map(({ item, product }) => {
                item.totalPrice = item.quantity * product.price;
                return item;
            });

        // Recalculate totalAmount
        this.totalAmount = this.items.reduce((total, item) => total + item.totalPrice, 0);

        next();
    } catch (error) {
        console.error("Error in pre save middleware", error);
        next(error);
    }
});

module.exports = mongoose.model("Cart", cartSchema);
