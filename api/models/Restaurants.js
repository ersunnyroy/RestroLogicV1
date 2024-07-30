const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema({
    restaurant_name: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'countires'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Restaurant', RestaurantsSchema)