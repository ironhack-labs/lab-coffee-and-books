const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: { type: String },
    site: { type: String, enum: ['Coffee shop', 'Bookstore'] },
    location: {
        type: { type: String },
        coordinates: [Number]
    }
})

// placeSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('place', placeSchema)