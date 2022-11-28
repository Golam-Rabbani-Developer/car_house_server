const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    type: String,
    picture: String,
    location: String,
    resaleprice: String,
    originalprice: String,
    usedyears: String,
    postedtime: Number,
    sellername: String,
})


const Products = mongoose.model('Products', productSchema);

module.exports = Products;