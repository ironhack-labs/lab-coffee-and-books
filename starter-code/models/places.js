const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ["coffee shop", "bookstore"] },
    location: { type: { type: String }, coordinates: [Number] }
  },
  { timestamps: true }
);
placeSchema.index({ location: "2dsphere" });

const placeModel = mongoose.model("place", placeSchema);

module.exports = placeModel;
