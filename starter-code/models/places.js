const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: { type: String, enum: ['coffee shop', 'book store'] },
    location: {
        type: { type: String },
        coordinates: [Number]
    }
})

placeSchema.index({ location: '2dsphere' })
const Places = mongoose.model('Place', placeSchema)
module.exports = Places
