const express = require('express');
const router = express.Router();
const User = require('../models/user_schema')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');

//post auth
router.post('/auth', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    console.log(req.body)
    let user = await User.findOne({ identity: req.body.users })
    if (!user) return res.status(400).send({ message: 'Usuario contraseña no son válidos' });

    const validatePassword = await bcrypt.compare(req.body.password, user.password)
    if (!validatePassword) return res.status(400).send({ message: 'Usuario o contraseña no son válidos' })

    if (!user.active) {
        return res.status(400).send({ message: 'Su cuenta se encuentra deshabilitada.' })
    }

console.log('user',user)
    const jwtToken = user.generateJWT();
    res.status(201).header('Authorization', jwtToken).send({
        _id: user._id,
        rol: user.role,
        message: 'you have logged in',
        name: user.name,
        token: jwtToken,
        active: user.active,
    });
});

module.exports = router;