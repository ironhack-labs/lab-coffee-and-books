const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: { type: { type: String }, coordinates: [Number] },
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"]
    }
  },
  {
    timestamps: true
  }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
