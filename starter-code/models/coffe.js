/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeShema = new Schema({
  name: String,
  description: String,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});
//le dice a mongodb que guarde la localizacion
CoffeShema.index({
  location: '2dsphere'
});
module.exports = mongoose.model('Coffe', CoffeShema);
