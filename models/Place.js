const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: {type: String, required: true},
    kind: { type: String, enum: ["Café", "Bookstore"], required: true },
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
