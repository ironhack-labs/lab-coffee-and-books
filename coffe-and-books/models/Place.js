const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  kind: {
    type: String,
    enum: ["COFFEE", "BOOKS"]
  },
  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: [Number]
  }
});

placeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", placeSchema);
