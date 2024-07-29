require('dotenv').config()
const mongoose = require('mongoose')

const dbConnect = async (req, res) => {
    try {
        console.log(process.env.DATABASE_URI)
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Database connected successfully")
    } catch (err) {
        console.error("Database connection error:", err)
        return res.status(500).send({ status: false, error_message: err.message })
    }
}

module.exports = dbConnect