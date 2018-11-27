const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  },
  location: { type: { type: String }, coordinates: [Number] }
}, {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }, versionKey: false
  })

module.exports = mongoose.model('Place', placeSchema)