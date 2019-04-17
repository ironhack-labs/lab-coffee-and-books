const mongoose = require("mongoose");
const Schema   = mongoose.Schema;



const placeSchema = new Schema({
  name: {type: String, unique: true, required: true},
  type : {type: String, enum: ['coffee shop', 'bookstore'], required: true},
  lat: Number,
  lng: Number
},{timestamps:true});

const Place = mongoose.model("Places", placeSchema);

module.exports = Place;