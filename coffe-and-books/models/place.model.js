const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
      enum: ['coffe shop', 'bookstore']

    },

    location: {
      type: {
        type: String,
      },
      coordinates: {
        type: [Number]
      }
    }
  },
  {

    timestamps: true
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
