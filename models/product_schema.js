const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    code: {
        type: String,
    },
    name:{
        type: String
    },
    description:{
        type: String,
    },
    date_create: {
        type: Date,
        default: Date.now
    },
    id_provider :{
        type: mongoose.Schema.ObjectId // id del provedor
    },
    price : {
        type: Number
    },
    quantity :{
        type: Number
    },
    id_provider_business : {
        type: mongoose.Schema.ObjectId // id del la empresa proveodora
    },
    iva :{
        type: Number
    },
   
})

const Product = mongoose.model('product', productSchema)
module.exports = Product