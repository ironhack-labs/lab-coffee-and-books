const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['cofee shop', 'bookstore']
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }

  },
  { timestamps: true }
);
placeSchema.index({ location: '2dsphere' })
const Place = model("place", placeSchema);

module.exports = Place;
