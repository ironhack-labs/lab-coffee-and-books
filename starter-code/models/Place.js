const { Schema, model } = require('mongoose')

const placeSchema = new Schema({
  name: String,
  type: { type: String,
    enum: ['COFFEE', 'BOOKS']},
  location: {
  type: {
      type: String,
      default: "Point"
    },
    coordinates: [Number]
  },

}, {
  timestamps:
  {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

placeSchema.index({ location: "2dsphere" })

module.exports = model('Place', placeSchema)
