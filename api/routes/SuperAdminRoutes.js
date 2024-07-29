const express = require('express');
const Router = express.Router();
const SuperAdminController = require('../controllers/SuperAdminController');

// routes of super admin
Router.route('/create').post(SuperAdminController.createAdmin);
// Router.route('/login').post(SuperAdminController.loginAdmin);


module.exports = Router;