const { Schema, model } = require('mongoose')

const placeShema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ["coffe shop", "bookstore"],
            default: "coffe shop"
        },
        locate: {
            type: {
                type: String
            },
            cordinates: [Number]
        },
    },
    {
        timestamp: true
    }
)

placeShema.index({ location: '2dsphere' })

const Place = model('Place', placeShema)
module.exports = Place