const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const place = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ['coffee shop', 'bookstore']
    },
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: true
  }
);
place.index({ location: '2dsphere' });

const Model = mongoose.model("Places", place);
module.exports = Model;