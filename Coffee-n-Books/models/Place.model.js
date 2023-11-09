const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
    {
        name: String,
        type: {
            type: String,
            enum: ["book store", "coffee shop"]
        },
        location: {
            type: { type: String },
            coordinates: { type: [Number] }
        }
    },
    { timestamps: true }
)
placeSchema.index({ location: '2dsphere' })
const Place = model('Place', placeSchema)

module.exports = Place