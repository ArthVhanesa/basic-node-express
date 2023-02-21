const express = require("express")
const app = express()
const { products, people } = require("./data")
const logger = require("./logger")

app.get("/", logger, (req, res) => {
    res.status(200).json(products)
})

app.get("/api/v1/products", logger, (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return ({ id, name, image })
    })
    res.json(newProduct)
})


// Route params example
app.get("/api/v1/products/:productID", (req, res) => {

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
})

// Query string params example
app.get("/api/v1/query", (req, res) => {

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
})

app.all("*", (req, res) => {
    res.status(404).json({ data: [] })
})

app.listen(5000, () => {
    console.log("server is listening at 5000")
})