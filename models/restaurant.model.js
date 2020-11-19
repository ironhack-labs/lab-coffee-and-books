const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffee shop', 'bookstore']
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    } 
}, { timestamps: true })

restaurantSchema.index({ location: '2dsphere' })

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant