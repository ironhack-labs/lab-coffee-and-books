const { Schema, model } = require('mongoose')

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ["coffee Shop", "bookStore"]
    },
    location: {
        type: {
            type: String,
        },
        coordinates: {
            type: [Number]
        }
    }
}, {
    timestamps: true
})

placeSchema.index({ location: '2dsphere' })

const Place = model('Place', placeSchema)

module.exports = Place