"use strict";

// More info here how to define a Schema -> http://mongoosejs.com/docs/guide.html
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// More info here -> http://mongoosejs.com/docs/schematypes.html
const placeSchema = new Schema({
  name: String,
  category: {
    type: String,
    enum: ["coffeeJoint", "bookStore"],
    default: "coffeeJoint"
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

placeSchema.index({
  location: '2dsphere'
});

const Place = mongoose.model("Place", placeSchema);

module.exports = {
  Place: Place
};

// DONE
