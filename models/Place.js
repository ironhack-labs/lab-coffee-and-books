const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placeSchema = new Schema({
name : {
  type:String,
  required: true
},
store:{
  type:String,
  enum: ["BookStore", "CoffeShop"]
},
lat:{
  type: Number,
  required :true
},
lgn:{
  type: Number,
  required:true
}
})


module.exports = mongoose.model('Place', placeSchema)
