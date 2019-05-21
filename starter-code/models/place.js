const mongoose = require("mongoose")
const Schema = mongoose.Schema


const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffe shop', 'bookstore']
  }

}, { timestamps: true })


const Place = mongoose.model('Place', placeSchema)

module.exports = Place


