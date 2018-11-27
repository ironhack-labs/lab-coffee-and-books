const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
  {
  name: String,
  location: {
    type: {
      type:String,
      default: "Point"
    },
    coordinates: [Number],
    kind:{
      type:String,
      enum:['coffee shop', 'bookstore']
    }
  }
},
{
  timestamps:{
    createdAt: true,
    updatedAt: true
  } 
});

module.exports = mongoose.model('Place', placeSchema)

