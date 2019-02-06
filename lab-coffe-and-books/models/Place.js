const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: { type: String },
    category: { type: String, enum: ["coffee", "bookstore"] },

    // LOCATION FIELD FOLLOWS THE GeoJSON PATTERN
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true }
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
