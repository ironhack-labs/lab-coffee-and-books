const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    place: {
        type: String,
        enum: ['coffee shop', 'bookstore']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
})

placeSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Place', placeSchema)