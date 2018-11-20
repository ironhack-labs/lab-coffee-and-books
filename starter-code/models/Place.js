const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: {type: String, unique: true},
  type: {type: String, enum : ['coffee shop', 'bookstore']}, 
  location: {
    lat: { type: String },
    lng: { type: String },
  }  
},{
timestamps: {
  createdAt: "created_at",
  updatedAt: "updated_at"
}});


const Place = mongoose.model("Place", placeSchema);
module.exports = Place;