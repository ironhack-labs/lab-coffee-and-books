const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: { type: String},
    type: { type: String, enum: ["coffee shop", "bookstore"] }
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
