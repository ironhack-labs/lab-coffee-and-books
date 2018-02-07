const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = Schema({
  name: String,
  type: String,
  location: { type: { type: String }, coordinates: [Number] }
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
