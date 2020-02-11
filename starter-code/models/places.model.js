const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Coffee Shop', 'Bookstore'],
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
}, {
  timestamps: true
})

placesSchema.index({
  location: '2dsphere'
})

const Place = mongoose.model("User", placesSchema)

module.exports = Place