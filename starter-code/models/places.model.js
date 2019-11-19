const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placesSchema = new Schema(
  {
    name: String,
    type: String,
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Places", placesSchema);
