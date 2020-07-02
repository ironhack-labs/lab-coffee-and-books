const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ["coffee shop", "bookstore"]
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true

});



const Place = mongoose.model("place", placesSchema)

module.exports = Place