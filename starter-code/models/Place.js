const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: {type: String, unique:true},
    type: String, enum: ['Coffe shop', 'Bookstore'],
    location: {
      lgt: Number,
      ltd: Number
    }
},{
  timeStamps: true
  })
  
  const Place = mongoose.model('Place', placeSchema);
  module.exports = Place;
  