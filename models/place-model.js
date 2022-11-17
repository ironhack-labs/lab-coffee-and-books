const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ['COFFEE SHOP', 'BOOKSTORE'],
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
    },

)

placeSchema.index({ location: '2dsphere' })

module.exports = mongoose.model('Place', placeSchema)