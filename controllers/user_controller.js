const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { authAdmin  } = require('../middlewares/auth_middleware')
const { validationResult } = require('express-validator')
const User = require('../models/user_schema')
const cors = require('cors')

router.post('/user', cors(), async (req, res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.status(422).json({ err: err.array() });
    }
    let user = await User.findOne({ identity: req.body.identity })
    if (user) return res.status(422).json({ message: 'Este usuario ya existe' });
    const quantityUser = await User.countDocuments()
    //bcrypt
    const salt = await bcrypt.genSalt(10);

    const password = req.body.password ? req.body.password : `${Math.floor(Math.random() * 100)}abc`   

    const hashPassword = await bcrypt.hash(password, salt);
  
    user = new User({
        address: req.body.address,
        landline: req.body.landline,
        phone: req.body.phone,
        user_number: quantityUser + 1,
        profile_photo: req.body.profile_photo,
        surname:req.body.name,
        password: hashPassword, 
        role: req.body.role,
        name: req.body.name,
        identity:req.body.identity,
        identity_type:req.body.identity,
        active: true,
    });
    await user.save()
    const jwtToken = user.generateJWT();
    if (user && req.body.password ) {
        res.status(201).header('Authorization', jwtToken).send({
            _id: user._id,
            token: jwtToken,
            role: user.role,
            active: true,
            
        });
    }
    else if (user && !req.body.password){
        res.status(201).json({message: "usuario creado"})
    }
    else {
        return res.status(422).json({ error: 'Error al registrar usuario' });
    }
});

router.get('/user', cors(), async(req, res)=>{
const listUser = await User.find()
res.status(201).json(listUser)
})

router.get('/user/:id', cors(), async(req, res)=>{
    const listUser = await User.findOne({_id: req.params.id})
    res.status(201).json(listUser)
    })
module.exports = router