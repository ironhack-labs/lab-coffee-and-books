const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        type: {
            type: String,
            enum: ['COFFEE-SHOP', 'BOOKSTORE'],
            required: true,
        },
        location: {
            type: {
                type: String,
                required: true
            },
            coordinates: [Number],
        }
    },
    {
        timestamps: true
    }
)

placeSchema.index({ location: '2dsphere' })

module.exports = model("Place", placeSchema)