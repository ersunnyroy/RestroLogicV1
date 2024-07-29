const SuperAdmin = require('../models/SuperAdmin')
const { error_message, success } = require('../config/systemMessage')
const bcrypt = require('bcrypt')

const createAdmin = async (req, res) => {
    try {
        const { firstname, lastname, email, password, role } = req.body
        if (!firstname || !lastname || !email || !password || !role) {
            return res.status(400).send({ status: false, message: error_message.ALL_FIELDS_REQUIRED })
        }
        // hased password
        const hashedPassword = await bcrypt.hash(password, 10)
        const newSuperAdmin = {
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role
        }

        await SuperAdmin.create(newSuperAdmin)

        // api success response on super admin creation 
        return res.status(200).send({ status: true, message: success.CREATED, SuperAdmin })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error_message.INTERNAL_ERROR, errors: error })
    }
}


module.exports = { createAdmin }