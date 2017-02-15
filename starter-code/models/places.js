/*jshint esversion: 6*/

const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const PlacesSchema = new Schema({
  name: String,
  type: String,
  location: { type: { type: String }, coordinates: [Number] }
});
PlacesSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Places', PlacesSchema);
