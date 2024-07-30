const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeesSchema = new Schema({
    firstname: {
        required: true,
        type: String,
    },
    lastname: {
        required:true,
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        required: true,
        type: String
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        required:true,
        ref: "restaurants"
    },
    role: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "roles"
    },
    isActive: {
        type:boolean,
        default: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Employee', EmployeesSchema)