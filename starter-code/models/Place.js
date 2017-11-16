const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  type: {type: String, enum:["coffeeShop","bookStore"], default:"coffeeShop"},
  location: { type: { type: String }, coordinates: [Number] }
});

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;
