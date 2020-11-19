const mongoose = require('mongoose')
const Schema = mongoose.Schema


const placeSch = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  },
  address: String,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
        lat: Number,
        lng: Number
      }
  }
  
}, { timestamps: true })

module.exports = mongoose.model('Place', placeSch)
