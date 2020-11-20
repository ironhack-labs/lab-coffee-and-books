const { text } = require('body-parser')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    default: 'Tienduca'
  },
  type: {
    type: String,
    enum: [ 'coffee shop', 'bookstore' ],
    required: true,
    default: 'coffee shop'
  },
  description: String,
  image: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6V3czKXdXCbOhXss2gOe32v7gIX2ydJu-Og&usqp=CAU'
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
}, { timestamps: true })

placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('Place', placeSchema)

module.exports = Place