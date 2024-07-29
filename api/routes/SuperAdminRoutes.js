const express = require('express')
const Router = express.Router()
const SuperAdminController = require('../controllers/SuperAdminController')
const AuthController = require('../controllers/AuthController')


// routes of super admin
Router.route('/create').post(SuperAdminController.createAdmin)

Router.route('/login').post(AuthController.AdminLogin)



module.exports = Router