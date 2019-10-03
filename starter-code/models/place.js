const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const place = new Schema({
  name: String,
  tipo: {
    type: String,
    enum: ['cafeteria', 'livraria']
  },
  local: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
}, {
  timestamps: true
})

place.index({
  location: '2dsphere'
})

const Place = mongoose.model('Place', place)


module.exports = Place