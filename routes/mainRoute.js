const express = require("express")
const router = express.Router()
const  { getProducts, setProducts } = require("../controllers/mainRoute")


// router.get("/", getProducts)
// router.post("/", setProducts)

router.route("/").get(getProducts).post(setProducts)

module.exports = router