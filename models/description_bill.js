 const mongoose = require('mongoose')

 const description = new mongoose.Schema({
    description: {
        type: String,
    },
  price_by_unit: {
        type: String,
    },
  discount: {
        type: String,
    },
  total: {
        type: String,
    },
  id_product: {
        type: Date,
        default: Date.now
    },
    quantity_product : {
      type: Number,
    }
   
})

// const Provider = mongoose.model('provider', providerSchema)
// module.exports = description