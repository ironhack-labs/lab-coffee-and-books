const { Schema, model } = require("mongoose");


const placeSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        enum: ["coffee shop", "bookstore"],
        default: "bookstore"
        /*  required: [true, "Field is required."] */
    },
    location: {
        type: {
            type: String //Esta propiedad de location es String
        },
        coordinates: [Number]
    }
})

placeSchema.index({ location: '2dsphere' })

const Place = model("place", placeSchema);

module.exports = Place;