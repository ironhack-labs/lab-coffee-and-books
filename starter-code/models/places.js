const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema ({
  name: String,
  typePlace: String,
  // location: { type: { type: String }, coordinates: [Number] }
});

const Place = mongoose.model('placement', PlaceSchema);
module.exports = Place;
