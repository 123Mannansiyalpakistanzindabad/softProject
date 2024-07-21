const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    productname: String,
    productdetail : String
})

const productModel = mongoose.model("product", productSchema)
module.exports = productModel