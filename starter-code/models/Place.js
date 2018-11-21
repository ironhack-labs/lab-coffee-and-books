const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type:{
    type:String,
    enum:['Coffee shop', 'Bookstore'] 
  },
  timestamps:String,
  coordinates:{
      lat:Number,
      lng:Number,
  }
});
const Place=mongoose.model('Place',placeSchema)
module.exports =Place