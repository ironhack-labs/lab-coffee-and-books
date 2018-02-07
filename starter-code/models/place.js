const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    description: String,
    kindOfEstablishment: {
		type: String,
		enum: ["cofee", "bookstore"]
	},
    location: { 
      type: { type: String ,default:'Point'},
       coordinates: [Number] }
  });
  placeSchema.index({ location: '2dsphere' });

  const Place = mongoose.model("Place",placeSchema);
  module.exports = Place;