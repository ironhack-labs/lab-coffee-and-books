const mongoose = require('mongoose')
const Schema = mongoose.Schema
const placeSchema = new Schema({
    name: String,
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    type: {
        type: String,
        enum: ['coffe shop', 'bookstore']
    },
}, {
    timestamps: true
})

placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
