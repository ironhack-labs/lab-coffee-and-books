/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
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
BookSchema.index({
  location: '2dsphere'
});
module.exports = mongoose.model('Book', BookSchema);
