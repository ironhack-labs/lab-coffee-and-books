const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
placeSchema.index({ location: "2dsphere" });

//EXPORT PLACE SCHEMA
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;

// Add Location fields to form
// Get Location & Save Places
// Show Places in Map -figure out if you can set a difference among them
// Get Google Maps API Key
// Add Google Maps to index.ejs
// The mapp
// Add Markers to show places’ locations
// The Show view
