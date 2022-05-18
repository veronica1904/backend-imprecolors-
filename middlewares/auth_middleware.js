const jwt = require('jsonwebtoken')
const secretKey = require('../config/production')


const authAdmin = (req, res, next) => {
    const jwtToken = req.header('Authorization')
    if (!jwtToken) return res.status(401).send('acceso denegado')
    try {
        const payload = jwt.verify(jwtToken, secretKey.secretKeyJWT())
        req.user = payload
        console.log(payload)
        if (!(payload.rol_user === "admin" ) ) return res.status(401).json({ err: "Acceso denegado" });
        next()
    } catch (e) {
        res.status(400).send('Acceso denegado')
    }
}

const auth = (req, res, next) => {
    const jwtToken = req.header('Authorization')
    if (!jwtToken) return res.status(401).send('acceso denegado')
    try {
        const payload = jwt.verify(jwtToken, secretKey.secretKeyJWT())
        req.user = payload
        next()
    } catch (e) {
        res.status(400).send('Acceso denegado')
    }
}
module.exports = { auth, authAdmin}
