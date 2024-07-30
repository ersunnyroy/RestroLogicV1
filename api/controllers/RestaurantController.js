const Restaurants = require('../models/Restaurants')
const Employees = require('../models/Employees')
const Roles = require('../models/Roles')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const { error_message, success } = require('../config/systemMessage')

// function to create a restaurant with admin employee
const createRestaurant = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const restaurant_admin_role = await Roles.findOne({ Role: "Restaurant_Admin" })
        const { restaurant_name, address1, address2, city, state, country, firstname, lastname, email, password } = req.body;
        const restaurant = {
            restaurant_name,
            address1,
            address2,
            city,
            state,
            country
        }

        const newRestaurant = await Restaurants.create(restaurant)
        const hashedPassword = await bcrypt.hash(password, 10)
        const admin_employee = {
            firstname,
            lastname,
            email,
            password: hashedPassword,
            restaurant: newRestaurant._id,
            role: restaurant_admin_role._id
        }

        await Employees.create(admin_employee)
        
        await session.commitTransaction();
        session.endSession();

        return res.status(201).send({ status: true, message:success.CREATED });

    } catch (err) {
        await session.abortTransaction();
        session.endSession();

        console.log(err)
        return res.status(500).send({ status: false, message: error_message.INTERNAL_ERROR, error: err })
    }
}

// function to update restaurant data 
const updateRestaurant = async (req, res) => {

}

module.exports = { createRestaurant, updateRestaurant }