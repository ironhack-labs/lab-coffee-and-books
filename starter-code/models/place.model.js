const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    enum: ['Coffee Shop', 'Bookstore'],
    required: true,
  },
  location: {
    type: {
      type: String,
      required: true
    },
    coord: {
      type: [Number],
      required: true,
    }
  }
}, {
  timestamps: true
})


placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema)

module.exports = Place