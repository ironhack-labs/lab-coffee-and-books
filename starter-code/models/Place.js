const mongoose = require("mongoose")


const placeSchema = new mongoose.Schema({
  name: String,
  image:String,
  category:{
    type:String,
    enum: ["Coffee Shop", "Bookstore"]
  },
  catSlug:String,
  rating:{
    type:Number,
    min:0,
    max:100
  },
  location:{
    address: {
      type:String,
      default: "Point"
    },
    coordinates:[Number]
  }
},
{
  timestamps:true,
  versionKey: false
})

module.exports = mongoose.model("Place", placeSchema)