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
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
