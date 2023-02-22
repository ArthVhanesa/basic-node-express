const express = require("express")
const router = express.Router()
const {getQuery} = require("../controllers/query")

// Query string params example
router.route("/").get(getQuery)

module.exports = router