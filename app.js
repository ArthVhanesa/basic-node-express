const express = require("express")
const app = express()
const { products, people } = require("./data")
const logger = require("./middleware/logger") //middleware import
const auth = require("./middleware/auth") //middleware import

const product = require("./routes/products")
const mainRoute = require("./routes/mainRoute")
const query = require("./routes/query")

// middleware works
// req => middleware => res

// for using middleware in all routes
// app.use(logger)

// this will middleware apply to all routes starts with api
// app.use("/api", logger)

// applied 2 middleware on routes
// middleware always execute in given order/
// here middle ware works like (req => middleware => middleware => res)
app.use([logger, auth])

// for parse the body (form body)
app.use(express.urlencoded({ extended: false }))

// parse payload json
app.use(express.json())

app.use("/", mainRoute)
app.use("/api/v1/products", product)
app.use("/api/v1/query", query)

app.all("*", (req, res) => {
    res.status(404).json({ data: [] })
})

app.listen(5000, () => {
    console.log("server is listening at 5000")
})