
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({

  name: {type: String},
  description: {type: String, 
          enum:['coffee shop','bookstore']},  
  address: {type:String},        
  location: {
          type: {
                type: String},
          coordinates: [Number]
        }
},
  {timestamp: true}
)
placeSchema.index({ location: '2dsphere' })
const Place = mongoose.model('Place',placeSchema)
module.exports = Place

