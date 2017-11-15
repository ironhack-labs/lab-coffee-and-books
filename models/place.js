const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new mongoose.Schema({
  name: String,
  description: String,
  business: {
    type: String,
    class: ["BOOKSTORE", "COFFEESHOP"]
  },
  location: { type: { type: String }, coordinates: [Number] }
});
placeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", placeSchema);
