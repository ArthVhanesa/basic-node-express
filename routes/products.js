const express = require("express")
const router = express.Router()
const { getProducts, getProductsId } = require("../controllers/products")

router.route("/").get(getProducts)

// Route params example
router.route("/:productID").get(getProductsId)

module.exports = router