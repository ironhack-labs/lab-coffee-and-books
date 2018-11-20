const mongoose = require('mongoose');

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['coffee shop', 'bookstore'],
  },
  location: {
    lat: { type: String },
    lng: { type: String },
  },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
