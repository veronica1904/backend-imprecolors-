const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const secretKey = require('../config/production')

const clientSchema = new mongoose.Schema({
    code: {
        type: String,
    },
    identity: {
        type: String,
        required: true
    },
    name : {
        type: String,
    },
    surname:{
        type: String
    },
    attended_by:{
        type: mongoose.Schema.ObjectId // id del usuario que atiende el cliente
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    addres: {
        type: String
    },
    password:{
        type: Boolean
    },
    // discount:{
    //     type: String
    // },
    observations :{
        type: String
    },
    date_create: {
        type: Date,
        default: Date.now
    },
   
})

const Client = mongoose.model('client', clientSchema)
module.exports = Client