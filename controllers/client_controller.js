const express = require('express')
const router = express.Router()
const cors = require('cors')
const Client = require('../models/clients_schema')


router.post('/client', cors(), async (req, res) => { 
    const client = await Client.findOne({ document_number: req.body.identity })
    if (client) return res.status(422).json({ message: 'El Cliente ya existe' });
    const quantityClient = await Client.countDocuments()

   const pclientSave = new Client({
    code: quantityClient +1 ,
    document_number: req.body.identity,
    name: req.body.name,
    last_name: req.body.surname,
    type_document: req.body.identity_type,
    landline: req.body.landline,
    phone: req.body.phone,
    attendedBy: req.body.attendedBy,
    observations: req.body.observation,
    address: req.body.address
    });
    await pclientSave.save()

    if (pclientSave){
        res.status(201).json({message: "cliente creado"})
    }
    else {
        return res.status(422).json({ error: 'Error al registrar el cliente' });
    }
})
router.get('/client', cors(), async(req, res)=>{
    const listclient = await Client.find()
    res.status(201).json(listclient)
    })
module.exports = router