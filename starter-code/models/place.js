const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    enum: ["coffe shop", "bookstore"],
    location: Object
  },
  { timestamps: true }
);

module.exports = mongoose.model("Place", placeSchema);
