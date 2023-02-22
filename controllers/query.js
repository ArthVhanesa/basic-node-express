const { products, people } = require("../data")

const getQuery = (req, res) => {

    // console.log(req)
    // console.log(req.params)
    const { search, limit } = req.query;
    let sortedProduct = [...products];

    if (search) {
        sortedProduct = sortedProduct.filter(product => product.name.startsWith(search))
    }

    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }

    if (sortedProduct.length < 1) {
        return res.status(200).json({ success: "true", data: [] })
    }
    res.json({ success: "true", data: sortedProduct })
}

module.exports = { getQuery }