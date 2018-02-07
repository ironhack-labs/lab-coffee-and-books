const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  kind: String,
  location: { type: { type: String }, coordinates: [Number] }

});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
