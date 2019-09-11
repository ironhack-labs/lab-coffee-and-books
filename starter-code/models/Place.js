const {Schema, model} = require('mongoose')

const placeSchema = new Schema(
  {
    name: String,
    address: String,
    location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: [Number]
    },
    role: {
      type: String,
      enum: ['COFFEESHOP', 'BOOKSTORE']
    }
  },
  {timestamps: true}
)

placeSchema.index({location: "2dsphere"})
module.exports = model('Place', placeSchema)