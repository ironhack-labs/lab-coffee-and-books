const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: { type: { type: String }, coordinates: [Number] },
  type: {
    type: String,
  },
}, {
  timestamps: true,
});

const Place = mongoose.model('place', placeSchema);

module.exports = Place;