const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  type: String,
  location: {
    type: String,
    coordinates: [Number]
  }
});

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;
