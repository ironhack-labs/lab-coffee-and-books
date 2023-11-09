const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    type: {
      type: String,
      enum: ['coffeShop', 'bookstore']
    },
    location: {
      type: {
        type: String,
      },
      coordinates: {
        type: [Number]
      }
    },
  },
  {
    timestamps: true
  }
);

const Place = model("place", userSchema);

module.exports = Place
