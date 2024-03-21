const express = require("express")
const router = express.Router()
const productController = require("../controller/productController")

// Define the route
router.post("/addProduct", productController.addProduct)
router.get("/getAllProduct", productController.getAllProduct)
router.get("/getProductById/:id", productController.getProductById)

router.delete("/deleteProduct/:productId", productController.deleteProduct)
router.delete("/deleteAllProduct", productController.deleteAllProduct)
router.delete("/images", productController.deleteAllImages)

module.exports = router
