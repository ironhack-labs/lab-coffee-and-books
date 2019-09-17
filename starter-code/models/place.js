const mongoose=require('mongoose')
const Schema=mongoose.Schema

const placeSchema= new Schema({

  name:{
    type:String,
  },
  type:{
   type:String,
    enum: ["Coffee Shop", "Book Store"]
  },
  latitud:{
    type:Number
  },
  longitud:{
    type:Number
  }

},{
  timestamps:true
})

const Place=mongoose.model('Place',placeSchema)
module.exports=Place