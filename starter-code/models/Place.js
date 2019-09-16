const { model, Schema } = require('mongoose')

const placeSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['COFFEE SHOP', 'BOOKSTORE']
    },
    address: String,
    location: {
      type: {
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

placeSchema.index({ location: '2dsphere' })

module.exports = model('Place', placeSchema)
