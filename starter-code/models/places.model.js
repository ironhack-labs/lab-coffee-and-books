const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type:{
   type: String,
    enum:['cofee-shop', 'bookstore']
  },
  location: {lat: Number, long: Number}
}, {
  timestamps: true
})

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;