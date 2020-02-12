const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['CoffeeShop', 'BookStore'],
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
}, {
    timestamps: true
})

const Place = mongoose.model("Place", placesSchema)

module.exports = Place