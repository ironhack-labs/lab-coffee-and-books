const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: String,
  typeOfEstablishment:{
    type: String,
    enum:['BOOKSTORE','COFFEEPLACE']
  },
  location:{
    lat: Number,
    lng: Number
  }
})

module.exports = mongoose.model('Place',placeSchema)