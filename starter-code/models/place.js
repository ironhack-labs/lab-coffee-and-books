const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name : String,
  type : {type:String, enum:["shop","bookstore"]},
  location: {
    lat:Number,
    lng:Number
  }
},{
  timestamps: true,
})

module.exports = mongoose.model("place", placeSchema)