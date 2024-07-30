const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuperAdminSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        maxlength: 50,
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 50,
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'roles'
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true  // This adds createdAt and updatedAt fields
})

module.exports = mongoose.model('admin', SuperAdminSchema)