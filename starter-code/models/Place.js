const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name:String,
  tipo:{
    type:String,
    enum:["coffe shop","bookstore"]
  },
  location:{
    type:{
      type:String,
      default:"Point"
    },
    coordinates:[Number]
  }
},{
  timestamps:{
    createdAt:true,
    updatedAt:true
  }
})

module.exports = mongoose.model('Place', placeSchema)