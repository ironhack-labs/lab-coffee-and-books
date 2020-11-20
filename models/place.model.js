const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        default: 'Unknown'
    },
    type: {
        type: String,
        enum:['coffee shop', 'bookstore']
    },

}, { timestamps: true }
)

const Place = mongoose.model('Places', placeSchema)
module.exports = Place