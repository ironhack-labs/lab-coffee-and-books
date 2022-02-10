const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: { type: String, enum: ['Coffee Shop', 'Bookstore'] },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true,
  }
)

const Place = model("Place", placeSchema);

module.exports = Place;
