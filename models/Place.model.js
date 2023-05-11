const { Schema, model } = require('mongoose')

const coffeeBookSchema = new Schema(
    {
        name: {
            type: String,
        },
        type: {
            type: String,
            enum: ['coffeeshop', 'bookstore']
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

coffeeBookSchema.index({ location: '2dsphere' })

const Place = model('Place', coffeeBookSchema)

module.exports = Place