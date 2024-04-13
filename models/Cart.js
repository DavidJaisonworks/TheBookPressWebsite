const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cart', cartSchema);
