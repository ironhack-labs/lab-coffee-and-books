
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const placeSchema = new mongoose.Schema({
  name : String,
  type : String,
  description : String,
  location: { type: {type: String}, 
  coordinates: [Number]
}
})
placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;