const mongoose = require ('mongoose')

const providerBusniess = new mongoose.Schema({
    url_busniess: {
        type: String,
    },
    nit: {
        type: String,
    },
    name_busniess: {
        type: String,
    },
    phone: {
        type: String,
    },
    location: {
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
    email: {
        type: String,
    },
     date_create: {
         type: Date,
         default: Date.now
     },
    //  id_business : {
    //      type: mongoose.Schema.ObjectId // id del la empresa provedora(provider_business)
    // // }
   
})


module.exports = Provider_busniess
