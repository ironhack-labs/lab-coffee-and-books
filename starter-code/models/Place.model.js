const { Schema, model } = require("mongoose");

const placeSchema = new Schema(
  {
    name: {
      type: String,
      unique: true
    },
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"]
    }
  },
  {
    location: {
      type: Number,
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
