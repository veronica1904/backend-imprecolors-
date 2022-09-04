const express = require('express')
const router = express.Router()
const { authAdmin  } = require('../middlewares/auth_middleware')
const fileupload = require('express-fileupload')
const { validationResult } = require('express-validator')
const Product = require('../models/product_schema')
const cors = require('cors')

router.use(fileupload())

router.post('/product', cors(), async (req, res) => { 
    
    const product = await Product.findOne({ code: req.body.code })
  
    if (product) return res.status(422).json({ message: 'El codigo del producto ya existe' });

    console.log('req.files.files >>> ', typeof req.files.files)
   const productSave = new Product({
    code: req.body.code,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    iva: req.body.iva,
    price: req.body.price,
    id_provider: req.body.provider,
    file: req.files && req.files.files
    });
    await productSave.save()

    if (productSave){
        res.status(201).json({message: "Producto creado"})
    }
    else {
        return res.status(422).json({ error: 'Error al registrar el producto' });
    }
})
router.get('/product', cors(), async(req, res)=>{
    const listProduct = await Product.find()
    res.status(201).json(listProduct)
    })
// router.get('/product/:id', cors(), async(req, res)=>{
//         const listProduct = await Product.findOne({_id: req.params.id})
//         res.status(201).json(listProduct)
//         })
module.exports = router