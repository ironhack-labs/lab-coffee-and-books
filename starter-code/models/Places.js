const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: { type: String, required: true, unique: true},
    type: { type: String, enum: ["Coffee shop", "Bookstore"]},
    location: { type: { type: String }, coordinates: [Number] },
  },
  {
    timestamps: true
  }
);

const Places = mongoose.model("Places", placeSchema);
module.exports = Places;
