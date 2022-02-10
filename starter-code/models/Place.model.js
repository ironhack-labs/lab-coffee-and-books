const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['coffee shop', 'bookstore']
    },
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
  }
);


placeSchema.index({ location: '2dsphere' })
module.exports = model("Place", placeSchema)
