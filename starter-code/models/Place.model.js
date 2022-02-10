const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
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
);

placeSchema.index({ location: '2dsphere' })

const Place = model("Place", placeSchema);

module.exports = Place;