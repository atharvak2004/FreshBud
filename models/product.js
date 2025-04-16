const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        trim: true,
        minlength: [10, 'Description must be at least 10 characters long.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
        min: [0, 'Price must be a positive number.']
    },
    location: { 
        type: String,
        required: [true, 'Location is required.'],
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: {
            values: ['Fruits', 'Vegetables', 'Seasonal', 'Leafy-Greens', 'Exotic-Vegetables', 'Best-Selling', 'Todays-Offer'],
            message: '{VALUE} is not a valid category.'
        },
        default: 'Other'
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ['Organic', 'Normal'],
            message: '{VALUE} is not a valid type.'
        },
        default: 'Conventional'
    },
    image: {
        url: {
            type: String,
            required: [true, 'Image URL is required.'],
            
        },
        filename: {
            type: String,
            required: [true, 'Image filename is required.']
        }
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner is required.']
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String], // Array of tags
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
