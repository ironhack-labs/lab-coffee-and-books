const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  type: {type: String, enum: ['cofee shop', 'bookstore']},
  location: {type: {type: String}, coordinates: [Number] },
}, {
  timestamps: true,
});

const Place = mongoose.model('place', placeSchema);
module.exports = Place;
