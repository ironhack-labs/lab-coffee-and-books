const { Schema, model } = require("mongoose");

const placesSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ['coffee shop', 'bookshop']
        },
        location: {
            type: {
                type: String,
            },
            coordinates: [Number]
        }
    },

    {
        timestamps: true
    }


)

placesSchema.index({ location: '2dsphere' })

const Place = model("Place", placesSchema)

module.exports = Place;
