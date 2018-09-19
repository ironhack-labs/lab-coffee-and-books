const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const placeSchema = new Schema({
  name:String,
  location:{
    type:{
      type:String,
      default:'Point'
    },
    address:String,
    coordinates:[{
      type:Number
    }]
  },
  type:{
    type:String,
    enum:['COFFEE', 'BOOKSTORE'],
    default:'COFFEE'
  }
})
 module.exports = mongoose.model('Place', placeSchema);