const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Indica el nombre']
    },
    type: {
      type: String,
      required: [true, 'Indica el tipo de establecimiento'],
      enum: ['Coffe Shop', 'Bookstore'],
      default: 'Coffe Shop'
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
  }
)

placeSchema.index({ location: '2dsphere' })

const Place = model("Place", placeSchema);

module.exports = Place;
