const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Esquema:

const placeSchema = new Schema({

  name: String, 
  type: {
    type: String,
    emun: ['Coffee Shop', 'Bookstore']
  },
  location: {
    type: { type: String },
    coordinates: [Number]
  }
},{

  timestamps: true
})

const Place = mongoose.model("Place", placeSchema)

module.exports = Place