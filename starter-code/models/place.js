const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: String,
  location: {
    lat: Number,
    lng: Number
  },
  type: String
}, { timestamps: true })

const Place = mongoose.model("Place", placeSchema)
module.exports = Place