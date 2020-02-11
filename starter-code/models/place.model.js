const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    type: String,
}, {
    timestamps: true
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place