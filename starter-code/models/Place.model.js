const { Schema, model } = require("mongoose");
const { type } = require("os");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: { type: String },
    placeS: {
      type: String,
      enum: ['coffee shop', 'bookshop'],
      default: 'coffee shop'
    }, location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
