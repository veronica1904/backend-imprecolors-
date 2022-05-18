const mongoose = require('mongoose')

const providerBusinessSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    code: {
        type: String,
    },
    location: {
        type: String,
    },
    name_busniess: {
        type: String,
    },
    phone:{
        type: String,
    },
    email: {
        type: Date,
        default: Date.now
    },
    nit: {
        type: String
    },
    id_business : {
        type: mongoose.Schema.ObjectId // id del la empresa provedora(provider_business)
    }
   
})

const ProviderBusiness = mongoose.model('provider_business', providerBusinessSchema)
module.exports = ProviderBusiness