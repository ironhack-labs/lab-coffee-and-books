const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ["coffee shop", "bookstore"]
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    // timestamps:
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;