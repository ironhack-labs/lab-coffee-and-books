const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    type: {
        type: String,
        required: true,
        enum: ["coffeeShop", "bookStore"]
    }
}, {
    timeStamps: true
}
)
placeSchema.index({ location: '2dsphere' })
const Place = model("Place", placeSchema);

module.exports = Place;