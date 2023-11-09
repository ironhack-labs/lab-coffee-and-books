const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
    {
        name: String,
        type: String,
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
        timestamps: true
    }
);

placeSchema.index({ location: '2dsphere' })

const Place = model("Place", placeSchema);

module.exports = Place;
