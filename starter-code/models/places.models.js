const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enun: ['coffe shop', 'bookstore']
  },
  location: {
    type: {
      type: String,
      default: "Point"
    }, coord: [Number]
  }
}, {
  timestamps: true
})

const Place = new mongoose.model('Place', placeSchema)

module.exports = Place