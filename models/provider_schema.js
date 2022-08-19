const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
    email_provider: {
        type: String,
    },
    name_provider: {
        type: String,
    },
    surname_provider: {
        type: String,
    },
    url_business:{
        type: String,
    },
    phone_provider: {
        type: String,
    },
    nit:{
        type: String,
    },
    date_create: {
        type: Date,
        default: Date.now
    }
   
})

const Provider = mongoose.model('provider', providerSchema)
module.exports = Provider