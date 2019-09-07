const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const places = new Schema(
  {
    name: String,
    type: { type: String, enum: ["coffee shop", "bookstore"] },
    lat: String,
    lng: String
  },
  {
    timestamps: { createdAt: "created_at ", updatedAt: "update_at" }
  }
);

const PlaceModel = mongoose.model("Places", places);

module.exports = PlaceModel;
