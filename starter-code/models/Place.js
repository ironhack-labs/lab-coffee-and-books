const { Schema, model } = require('mongoose')

const placeSchema = new Schema(
  {
    name: String,
    placeType: {
      type: String,
      enum: ['bar', 'antro', 'cantina', 'restaurante']
    },
    location: {
      address: {
        type: String,
        default: 'Point'
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Place', placeSchema)
