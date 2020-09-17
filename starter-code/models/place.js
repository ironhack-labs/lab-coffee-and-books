const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema
const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore']
    },
    location: {
        type: { type: String }, coordinates: [Number] }
},{
    Timestamp: true
})

placeSchema.index({ location: '2dsphere' })
module.exports = mongoose.model('Place', placeSchema)