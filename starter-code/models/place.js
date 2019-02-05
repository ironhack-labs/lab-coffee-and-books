const mongoose = require("mongoose");
const Schema = moongose.Schema;

const placeSchema = new Schema(
  {
    name: String,
    type: { type: String, enum: ["cofee shop", "bookstore"] }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Place", placeSchema);
