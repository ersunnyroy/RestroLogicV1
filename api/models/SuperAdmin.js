const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuperAdminSchema = new Schema({
        firstName:{
            type:String,
            required: true,
            maxlength: 50,
        },
        lastName:{
            type:String,
            required: true,
            maxlength: 50,
        },
        Role: {
            type: Schema.Types.ObjectId,
            ref: 'roles'
        },
        Email : {
            type:String,
            required:true,
            maxlength:255,
            unique:true,
        },
        Password: {
            type:String,
            required:true
        }
})

module.exports = mongoose.model('admin', SuperAdminSchema);