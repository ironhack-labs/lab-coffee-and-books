const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["Coffee Shop", "Bookstore"]
    },

    location: {
      type: {
        type: String,
        default: "Point"
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true
  }
);

placeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", placeSchema);
