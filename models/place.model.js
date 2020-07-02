const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: {
            type: String,
            enum: ['coffee shop', 'bookstore']
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

placeSchema.index({
    location: '2dsphere'
})

module.exports = mongoose.model('Place', placeSchema)