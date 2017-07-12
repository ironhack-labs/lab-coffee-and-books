const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({

  name: String,
  description: String,

  local: {
    type: String,
    enum: ['cafe', 'book_store'],
    default: 'cafe'
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});
  PlaceSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;
