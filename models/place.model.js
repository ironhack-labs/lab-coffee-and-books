const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ["coffee shop", "bookstore"]
    },
    location: {                 // new!
        type: {
            type: String
        },
        coordinates: [Number]
    }
})

placeSchema.index({ location: '2dsphere' })        // new!

const Place = mongoose.model('Place', placeSchema)

module.exports = Place