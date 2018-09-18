const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  coffeeOrBooks: String,
  location: { type: { type: String }, coordinates: [Number] }
});

placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('place', placeSchema);
