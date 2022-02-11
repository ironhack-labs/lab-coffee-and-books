const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  location: {
    type: {
      type: String,
    },
    coordinates: [Number],
  },
});

placeSchema.index({ location: "2dsphere" });

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;

// {
//     name: "Kaffeine",
//     type: "coffee shop",
//     location: {
//         type: "Point",
//         coordinates: [51.520236, -0.141151],
//     }
