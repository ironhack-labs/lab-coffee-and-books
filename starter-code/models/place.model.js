const { Schema, model } = require('mongoose')

const placeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        type: {
            type: String,
            enum: ['Coffee shop', 'Bookstore'],
            required: [true, 'Type of place is required'],
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number],
        }
    },
    {
        timestamps: true
    }
)

placeSchema.index({ location: '2dsphere' })
const Place = model('Place', placeSchema)
module.exports = Place
