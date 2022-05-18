const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const secretKey = require('../config/production')

const userSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    landline: {
        type: String,
    },
    phone: {
        type: String
       
    },
    role: {
        type: String
    },
    employee_number: {
        type: Boolean
    },
    profile_photo: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    identity: {
        type: String,
        required: true
    },
    password:{
        type: String
    },
    active: {
        type: Boolean
    },
    identity_type: {
        type: String
    },
    date_create: {
        type: Date,
        default: Date.now
    },
   
})
userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        email: this.name,
        role: this.role,
    }, secretKey.secretKeyJWT())
}
const User = mongoose.model('user', userSchema)
module.exports = User