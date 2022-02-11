const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("Places", userSchema);

module.exports = User;
