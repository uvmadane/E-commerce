const Product = require('../model/productModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Function to generate dynamic destination path for uploaded files
const dynamicDestination = function (req, file, cb) {
    // Generate dynamic path based on the current date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding leading zero for single-digit months
    const day = ('0' + currentDate.getDate()).slice(-2); // Adding leading zero for single-digit days

    const destinationPath = path.join(__dirname, `uploads/${year}/${month}/${day}/`);

    // Ensure that the directory exists, create it if not
    fs.mkdirSync(destinationPath, { recursive: true });

    // Callback with the generated destination path
    cb(null, destinationPath);
};

// Define multer storage with dynamic destination
const storage = multer.diskStorage({
    destination: dynamicDestination,
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Create multer instance with dynamic storage
const upload = multer({ storage });

// Middleware to handle file uploads
const uploadMiddleware = upload.fields([
    { name: 'name'},
    { name: 'category'},
    {name: 'quantity'},
    { name: 'new_price'},
    { name: 'old_price' },
    { name: 'images' }
]);

// Route handler for adding a product
exports.addProduct = async (req, res) => {
    try {
        // Execute the upload middleware first to handle file uploads
        uploadMiddleware(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'File upload failed' });
            }

            // Access form fields
            const {
                name,
                category,
                quantity,
                new_price,
                old_price
            } = req.body;

            // Extract image paths from the uploaded image files
            const images = req.files['images'] ? req.files['images'].map(file => file.path) : [];

            // Create a new product instance with the extracted data
            const product = new Product({
                name,
                category,
                quantity,
                new_price,
                old_price,
                images
            });

            // Save the product to the database
            await product.save();

            // Respond with a success message
            res.status(201).json({ product, message: 'Product added successfully' });
        });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
