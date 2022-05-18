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
    if (user) return res.status(422).json({ error: 'Este usuario ya existe' });
    //bcrypt
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // console.log(user, 'user')
    // const generateNumberUser = () => {
    //     if(user.user_number === 0) return `${(user.user_number + 1) + 'Impcolors' }`
    // }
    // console.log(generateNumberUser())

    user = new User({
        address: req.body.address,
        landline: req.body.landline,
        phone: req.body.phone,
        user_number: 1,
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
    if (user) {
        res.status(201).header('Authorization', jwtToken).send({
            _id: user._id,
            token: jwtToken,
            role: user.role,
            active: true,
            
        });
    } else {
        return res.status(422).json({ error: 'Error al registrar usuario' });
    }
});

module.exports = router