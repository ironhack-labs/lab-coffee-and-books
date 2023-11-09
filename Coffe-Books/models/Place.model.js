const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
    },

    type: {
      type: String,
      enum: ['coffeShop', 'bookStore']
    },

    location: {
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    }

  },
  {
    timestamps: true
  }
);

placeSchema.index({ location: '2dsphere' })

const Place = model("place", placeSchema);

module.exports = Place;
