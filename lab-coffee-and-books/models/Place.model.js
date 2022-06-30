const { Schema, model, default: mongoose } = require('mongoose')

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
        coordinates: [Number]
    }
}, {
    timestamps: true
})

placeSchema.index({ location: '2dsphere' })
const Place = mongoose.model('Place', placeSchema)

module.exports = Place