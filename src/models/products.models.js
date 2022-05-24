
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    images: [{ type: String }],
    category: { type: String, required: true },
    type: { type: String, required: true }
},
    {
        versionKey: false,
        timestamps: true
    }
);


const Product = mongoose.model("products", productSchema);

module.exports = Product;

