const { Schema, model } = require('mongoose')

const placeSchema = new Schema({
    name: {
        type: String
    },
    place: {
        type: String,
        enum: ['bookstore', 'coffee-shop'],
        default: 'bookstore',
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
},
    {
        timestamps: true
    }
)

placeSchema.index({ location: '2dsphere' })

const Place = model('Place', placeSchema)

module.exports = Place