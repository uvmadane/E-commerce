const addProduct = require("../model/productModel")
const multer = require("multer")
const path = require("path")
const mongoose = require("mongoose")
const fs = require("fs")

// Define fixed destination path for uploaded files
const destinationPath = path.join(".", "uploads")

if (!fs.existsSync(destinationPath)) {
  fs.mkdirSync(destinationPath, { recursive: true })
}

// Define multer storage with fixed destination
const storage = multer.diskStorage({
  destination: destinationPath,
  filename: function (req, file, cb) {
    // Generate a unique filename using UUID
    cb(null, Date.now() + "-" + file.originalname)
  },
})

// Create multer instance with fixed storage
const upload = multer({ storage })

// Middleware to handle file uploads
const uploadMiddleware = upload.fields([
  { name: "name" },
  { name: "category" },
  { name: "quantity" },
  { name: "new_price" },
  { name: "old_price" },
  { name: "images" },
])

// Route handler for adding a product
exports.addProduct = async (req, res) => {
  try {
    // Execute the upload middleware first to handle file uploads
    uploadMiddleware(req, res, async (err) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: "File upload failed" })
      }

      // Access form fields
      const { name, category, quantity, new_price, old_price } = req.body

      // Extract image paths from the uploaded image files
      const images = req.files["images"]
        ? req.files["images"].map((file) => file.path.replace(/\\/g, "/"))
        : []

      // Create a new product instance with the extracted data
      const product = new addProduct({
        name,
        category,
        quantity,
        new_price,
        old_price,
        images,
      })

      await product.save()
      console.log("Product Added", product)

      res.status(201).json({ product, message: "Product added successfully" })
    })
  } catch (error) {
    // Handle errors
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

exports.getAllProduct = async (req, res) => {
  try {
    const product = await addProduct.find({})

    console.log(product)

    res.status(200).json({ product, message: "Product retrieved successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}
// Import necessary modules

// Define your controller function
exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id // Assuming the product ID is passed in the request params

    // Fetch the product from the database using the Product model
    const product = await addProduct.findById(id)

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // If the product exists, return it
    res.status(200).json({ product, message: "Product retrieved successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId
    // await Product.deleteMany({});

    // Check if the productId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid productId" })
    }
    // Find the product by ID
    const product = await addProduct.findByIdAndDelete(productId)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // Delete the attached images from the file system
    product.images.forEach((imagePath) => {
      fs.unlinkSync(imagePath)
    })

    // allProducts.forEach(product => {
    //     product.images.forEach(imagePath => {
    //         fs.unlinkSync(imagePath);
    //     });
    // });

    // No need to remove the product again as findByIdAndDelete already removes it
    console.log(product)

    res.status(200).json({ message: "Product deleted successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

exports.deleteAllProduct = async (req, res) => {
  try {
    const products = await addProduct.find({})

    products.forEach((product) => {
      product.images.forEach((imagePath) => {
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath)
          console.log(`Deleted image: ${imagePath}`)
        } else {
          console.log(`File not found: ${imagePath}`)
        }
      })
    })
    await addProduct.deleteMany({})

    res
      .status(200)
      .json({ message: "All Product and images deleted successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

exports.deleteAllImages = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await addProduct.find({})

    // Loop through each product and delete its images from the file system
    products.forEach((product) => {
      product.images.forEach((imagePath) => {
        // Check if the file exists before attempting to delete it
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath)
          console.log(`Deleted image: ${imagePath}`)
        } else {
          console.log(`File not found: ${imagePath}`)
        }
      })
    })

    res.status(200).json({ message: "All images deleted successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}
