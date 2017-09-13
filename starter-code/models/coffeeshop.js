const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const coffeeshopSchema = new Schema({
  name: String,
  description: String
  location: { type: { type: String }, coordinates: [Number] }
});

coffeeshopSchema.index({ location: '2dsphere' });
const Coffeeshop = mongoose.model('User', coffeeshopSchema);

module.exports = Coffeeshop;
