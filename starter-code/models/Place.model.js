const { Schema, model } = require('mongoose')
const { PLACES } = require('../const/place.const')

const placeSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        type: {
            type: String,
            enum: PLACES
        },
        location: {
            type: { type: String },
            coordinates: [{ type: Number }]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

placeSchema.index({ location: '2dsphere' });

const PlaceModel = model('Place', placeSchema)

module.exports = PlaceModel