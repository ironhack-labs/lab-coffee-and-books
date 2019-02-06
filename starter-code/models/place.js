const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeShcema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["coffe shop", "bookstore"]
    },
    location: Object
  },
  {
    timestamps: true
  }
);

const Place = mongoose.model("Place", placeShcema);
module.exports = Place;
