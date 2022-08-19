const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    code: {
        type: Number
    },
    number_client: {
        type: String,
    },
    document_number:{
        type: String
    },
    name:{
        type: String
    },
    last_name:{
        type: String,
    },
    date_create: {
        type: Date,
        default: Date.now
    },
    type_document :{
        type: String,
    },
    landline : {
        type: Number
    },
    phone :{
        type: Number
    },
    attendedBy :{
        type: String
    },
    observations:{
        type: String
    },
    address:{
        type: String
    }
   
})

const Client = mongoose.model('client', clientSchema)
module.exports = Client