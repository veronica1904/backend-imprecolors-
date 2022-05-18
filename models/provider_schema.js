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
    phone_provider: {
        type: String,
    },
    date_create: {
        type: Date,
        default: Date.now
    },
    id_business : {
        type: mongoose.Schema.ObjectId // id del la empresa provedora(provider_business)
    }
   
})

const Provider = mongoose.model('provider', providerSchema)
module.exports = Provider