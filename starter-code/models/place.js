const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const PlaceSchema = new Schema({
  name : String,
  type: String,
  lat:  Number,
  lng:  Number,
},
{timestamps: true
});

const Place = mongoose.model('place', PlaceSchema);
module.exports = Place;