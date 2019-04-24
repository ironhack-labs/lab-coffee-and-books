const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: {
    type: String,
    enum: ['Coffee shop', 'Bookstore']
  },
  stars: {
    type: Number,
    min: 1,
    max:5
  },
  location: {
    adress: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  }
}, {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Place',placeSchema)