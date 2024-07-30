const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    Role: {
        type:String,
        required:true
    },
    Status: {
        type:String,
        default:"Active"
    },
    isAdminRole: {
        type:String,
        required:true,
        default: 0
    },
    displayName: {
        type: String,
        required: true
    }
}, {
    timestamps:true
})

module.exports = mongoose.model('Role', RoleSchema)