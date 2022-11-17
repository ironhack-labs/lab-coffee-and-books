const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: false,
    },
    type: {
      type: String,
      required: true,
      enum: ['Coffee shop', 'Bookstore']
    },
    location: {
      type: { type: String },
      coordinates: [{ type: Number }]
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
