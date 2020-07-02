const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema

const placeSchema = new Schema({
    name: String,
    type: {type: String,
            enum: ['coffee shop', 'bookstore']},

    location: {
        lat: {type: Number},
        lng: {type: Number}
    }
}, {
    timestamps: true
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place