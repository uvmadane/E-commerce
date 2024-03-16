const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Define the route
router.post('/addProduct', productController.addProduct);

module.exports = router;