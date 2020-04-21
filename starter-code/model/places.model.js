const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
  {
    name: String,
    typeOfPlace: {
      type: String,
      enum: ['Coffe Shop', 'Bookstore']
    },
    location: { type: { type: String },coordinates: [Number] }
  },
  {
    timestamps: true
  }
)

placeSchema.index({ location: '2dsphere' })

const Place = mongoose.model('PlaceDB', placeSchema)
module.exports = Place