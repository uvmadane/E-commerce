const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Define your schema fields here
    name: {type:String, required:true},
    category: String,
    quantity:String,
    new_price: String,
    old_price: String,
    images: [String]  // Assuming images are stored as an array of strings
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
