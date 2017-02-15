const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

// bookstore.js
const PlaceSchema = new Schema({
  name: String,
  description: String,
  establileshmentType: String,
  location: { type: { type: String }, coordinates: [Number] }
});
PlaceSchema.index({ location: '2dsphere' });// DIce a MongoDB que el campo location lo tiene que hacer con coordenadas
// en una esfera 2D

module.exports = mongoose.model('Place', PlaceSchema);
