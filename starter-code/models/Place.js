const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    name: String,
    type: {
      type: Array,
      enum: ["coffee shop", "bookstore"]
    },

    timestamps: true,
    
  },
  {}
);

const User = mongoose.model("User", placeSchema);
module.exports = User;
