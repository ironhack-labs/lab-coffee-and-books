const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        type: {
            type: String,
            required: true,
            enum: ['Coffee shop', 'Bookstore'],
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

module.exports = model('Place', placeSchema)
