const { Schema, model } = require('mongoose')
const placeSchema = new Schema(
    {
        name: {
            type: String,
        },
        category: {

            type: String,
            enum: ['Coffee Shop', 'Bookstore']
        },
        location: {
            type: {
                type: String
            },
            coordinates: {
                type: [Number]
            }
        }
    },
    {
        timestamps: true,
    }
)

placeSchema.index({ location: '2dsphere' })
const Place = model('Place', placeSchema)

module.exports = Place 