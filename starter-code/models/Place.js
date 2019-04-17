const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name : String,
  type: {
    type: String,
    enum : ["Coffee shop", "Bookstore"]
  },
  timestamps : {
    createdAt: {type: Date},
    updateAt: {type: Date}
  } 
});


const Place = mongoose.model('Cat', placeSchema);
module.exports = Place;