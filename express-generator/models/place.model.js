const mongoose = require('mongoose')
const Schema = mongoose.Schema


const placeSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        enum: ["coffe shop", "bookstore"]
    },
    location: {
        type: {
            type: String
        },
        coordinates:{
            lat: Number,
            lng: Number
        }
    }
}, {
    timestamps: true
})
//mongoose.model("Place", placeSchema)

const place = mongoose.model("Place", placeSchema)

module.exports = place
