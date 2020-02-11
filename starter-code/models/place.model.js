const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: ['coffee shop', 'bookstore'],
  date: { type: Date, default: Date.now },
  coords: {
    lat: Number,
    lng: Number
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;