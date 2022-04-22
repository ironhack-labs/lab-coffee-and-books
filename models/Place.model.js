const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: { type: String },
    type: { type: String, enum: ['coffee shop', 'bookstore'] },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  { timestamps: true }
)

const Place = model("Place", userSchema);

module.exports = Place;
