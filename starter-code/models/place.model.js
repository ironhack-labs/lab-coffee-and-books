const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['bookstore','coffe shop'],
        required: true
    },
    lat: Number,
    long: Number,
},{
    timestamps: true
})

const Place = mongoose.model("Place", placeSchema)

module.exports = Place