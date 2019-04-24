const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
  name: String,
  category: {
    type: String,
    enum: ['Restaurant', 'Library', 'Café', 'Subway']
  },
  image: String,
  starts: {
    type: Number,
    min: 1,
    max: 5
  },
  location: {
    address: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  }
}, 
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Place', placeSchema)