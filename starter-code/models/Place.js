const mongoose = require('mongoose')




const placeSchema= new mongoose.Schema({
  name: String,
  category:{
    type: String,
    enum :['Bar','Restaurant','Coffe']
  },


  stars:{
    type:Number,
    min:1,
    max:5,
  },

  location:{
    addres:{
      type:String,
      default:'Point'
    },

    coordinates:[Number]
  },
},
{
  timestamps:true,
  version:false
})

module.exports=mongoose.model('Place',placeSchema)