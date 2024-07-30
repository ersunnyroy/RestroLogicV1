const express = require('express')
const Router = express.Router()
const SuperAdminController = require('../controllers/SuperAdminController')
const AuthController = require('../controllers/AuthController')
const RestaurantController = require('../controllers/RestaurantController')

const verifyPermission = require('../middleware/verifyPermission')

// routes of super admin
Router.route('/create').post(SuperAdminController.createAdmin)
// route to login admin
Router.route('/login').post(AuthController.AdminLogin)
//Route to create restaurant
Router.route('/createRestaurant', verifyPermission).post(RestaurantController.createRestaurant)


module.exports = Router