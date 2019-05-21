const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaPlace = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffee-Shop', 'book-store']
  },
  location: {
    type: { type: String },
    coordinates: [Number]
  }
},{timestamps:true})

SchemaPlace.index({ location: '2dsphere' })
const Place = mongoose.model("Book", SchemaPlace);

module.exports = Place;