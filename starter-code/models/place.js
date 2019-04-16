const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: { type: String, enum: ['coffee shop', 'bookstore'] },
  timestamps: { type: Date, default: Date.now },
  long: Number,
  lat: Number
})

const Place = mongoose.model('Place', placeSchema);
module.exports = Place