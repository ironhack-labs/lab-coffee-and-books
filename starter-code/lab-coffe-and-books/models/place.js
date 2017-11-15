const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  city: String,
  location: { type: { type: String }, coordinates: [Number] }
});

const Place = mongoose.model('Place', placeSchema);
placeSchema.index({ location: '2dsphere' });
module.exports = Place;
