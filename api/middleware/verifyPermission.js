require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyPermission = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if(!authHeader) return res.status(401); // send unauthorized response if header is not have token

    const authToken = authHeader.split(' ')[1];

    jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.status(403).send({err})
        req.user = decoded.user
        next()
    }) 
} 

module.exports = verifyPermission;