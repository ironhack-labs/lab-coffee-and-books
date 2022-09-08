const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const PlacesSchema = new Schema(
  {
    name: {type: String},

    type: {type: String, enum: ['coffee shop', 'bookstore']},

    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: true,
  }
);

PlacesSchema.index({ location: '2dsphere' });

const Place = model("Place", PlacesSchema);

module.exports = Place;