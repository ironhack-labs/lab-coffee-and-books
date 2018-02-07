const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  description: String,
  kindOfEstablishment: String,
  location: { 
    type: { type: String ,default:'Point'},
     coordinates: [Number] }
});
PlaceSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", PlaceSchema);
