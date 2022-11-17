const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false
    },
    type: {
      type: String,
      required: true,
      enum: ["coffee shop", "bookstore"],
      trim: true
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true
  }
);

const Place = model("User", placeSchema);

module.exports = Place;
