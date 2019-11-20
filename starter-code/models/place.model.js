const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['Coffeeshop', 'Bookstore']
    },
    location: {
        type: String,
        coordinates: [Number]
    }
}, {
    timestamps: true
});

const Place = mongoose.model("place", placeSchema);

module.exports = Place