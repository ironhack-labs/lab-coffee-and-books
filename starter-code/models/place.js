const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  establishment: String,
  location: { type:{ type: String}, coordinates: [Number] }
});

PlaceSchema.index({ location: '2dsphere' });

const Place = mongoose.model("place", PlaceSchema);


module.exports = Place;
