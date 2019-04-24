const mongoose = require('mongoose')


const placeSchema = new mongoose.Schema({
  name: String,
  category: {
    type: String,
    enum: ["Coffee", "Restaurant"]
  },
  stars:{
    type:Number,
    min:1,
    max:5 
  },
  location:{
    address:{
      type:String,
      default: "Point"
    },
    coordinates:[Number]
   },
   image:String

},{
  timestamps: true,
  versionKey:false
})



module.exports =mongoose.model('Place', placeSchema)