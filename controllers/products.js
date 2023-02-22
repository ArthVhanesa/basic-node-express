const { products, people } = require("../data")

const getProducts = (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return ({ id, name, image })
    })
    res.json(newProduct)
}

const getProductsId = (req, res) => {

    // console.log(req)
    // console.log(req.params)

    const { productID } = req.params;
    const singleProduct = products.find(product => product.id === Number(productID));

    if (!singleProduct) {
        res.status(404).json({
            status: "404",
            error: "Data not found"
        })
    }
    res.json(singleProduct)
}

module.exports = { getProducts, getProductsId }