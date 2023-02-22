const { products, people } = require("../data")

const getProducts = (req, res) => {
    res.status(200).json(products)
}

const setProducts = (req, res) => {
    console.log(req.body)

    const { id, name } = req.body;

    console.log(name)

    res.status(200).json({ success: "true", data: [...people, { id: id, name: name }] })

}

module.exports = { getProducts, setProducts }