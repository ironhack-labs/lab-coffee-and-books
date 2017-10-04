const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  typeOfPlace: String,
  location: {
    type: { type: String },
    coordinates: [Number]
  }
});
// to do nearest queries
placeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", placeSchema);
