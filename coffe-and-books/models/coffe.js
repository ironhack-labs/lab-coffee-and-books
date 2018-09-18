const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const coffeSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

coffeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('coffe', coffeSchema);