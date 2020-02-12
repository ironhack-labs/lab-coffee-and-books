const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const placesSchema = new Schema(
  {
    name: String,
    type: String,
    enum: ["coffee_shop", "bookstore"],
    location: { lat: Number, long: Number }
  },

  {
    timestamps: true
  }
);
const Place = mongoose.model("place", placesSchema);
module.exports = Place;
