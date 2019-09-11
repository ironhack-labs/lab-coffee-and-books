const { Schema, model } = require('mongoose')
const placeSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['COFEE SHOP', 'BOOKSTORE']
    },
    address: String,
    location: {
      type: {
        type: String,
        default: "Point"
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model("Place", placeSchema)