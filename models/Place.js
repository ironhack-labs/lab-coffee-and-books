const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: {
    type: String,
    enum: ["Comic Store", "Freak Cafe"]
  },
  location: { type: { type: String }, coordinates: [Number] }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
