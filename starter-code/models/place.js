const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({

  name: String,
  type: {type: String, enum:["shop", "bookstore"]},
  location: Object,
  }, {
  timestamps: true,
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;