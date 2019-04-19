const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  place: {
    type: String,
    enum: ['Bookstore', 'Coffee shop']
  },
  location: {
    type: {
      String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place