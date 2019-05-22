const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: String,
  type: ['coffe shop', 'bookstore']
}, {
    timestamps: true
  })

  module.exports = mongoose.model('Place', placeSchema)