const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffe shop', 'bookstore']
    },
    location: {
        type: {
            type: String
        },
        coordinates: {
            latitude: Number,
            longitude: Number
        }
    }
}, {
    timestamps: true
})

placeSchema.index({
    location: '2dsphere'
})

module.exports = mongoose.model('Place', placeSchema)