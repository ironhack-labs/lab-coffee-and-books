const {Schema, model} = require('mongoose')

const placeSchema = new Schema(
  {
    name: String,
    placeType: {
      type: String,
      enum: ['bar', 'antro', 'cantina', 'restaurante']
    },
    location: {
      address:{
          type: String,
          addres: String
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