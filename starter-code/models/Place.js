const {Schema, model}= require('mongoose')

const placeSchema= new Schema({
  name:String,
  palaceType:{
    type:String,
    enum:['bar','antro','cantina','restaurante']
  },
  location:{
    addres:{
      type:String,
      default:'Point',
    },
    coordinates:[Number]
  }

},{
  timestamps:true,
  versionKey:false
})

module.exports= model('Place',placeSchema)