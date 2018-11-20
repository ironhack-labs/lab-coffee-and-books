const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  type: {type: String, enum: ['coffee', 'shop', 'bookstore']}
},
  {
  timestamps:true,
});


const Place = mongoose.model('Place', placeSchema);
module.exports = Place;


