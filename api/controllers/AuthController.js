const SuperAdmin = require('../models/SuperAdmin')
const { error_message, success } = require('../config/systemMessage')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const AdminLogin = async (req, res) => {
    try {
        const { username, password } = req.body
        if(!username || !password) {
            return res.status(400).send({status: false, message: error_message.ALL_FIELDS_REQUIRED })
        }

        const foundUser = await SuperAdmin.findOne({email:username})
        const verifyPassword = await bcrypt.compare(password, foundUser.password)
        if (!verifyPassword) return res.status(403).send({ status: false, message: `Invalid Credentials` })

        const userInfo = {
            firstname: foundUser.firstname,
            lastname: foundUser.lastname,
            email: foundUser.email,
            role: foundUser.role
        }

        const token = jwt.sign({user: userInfo}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m' })
        return res.status(200).send({ status: true, accessToken: token })

    } catch (error) {
        return res.status(500).send({status: false, message: error_message.INTERNAL_ERROR, error})
    }
}

module.exports = { AdminLogin }
