const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({

    name: String,
    type: {

        type: String,
        enum: ['coffee shop', 'bookstore']

    },

    location: {

        latitude: {
            type: String,
            default: 0
        },

        longitude: {
            type: String,
            default: 0
        }
    }

}, { timestamps: true })

module.exports = mongoose.model('Place', placeSchema)