const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

coffeeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('coffe', coffeeSchema);