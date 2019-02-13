
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    category: {
      type: String,
      enum: ['Restaurant','Bar','Coffee','Social','Educational']
    },
    stars:{
      type: Number,
      enum: [1,2,3,4,5]
    },
    address: {
      location: {
        type: String,
        default: 'Point',
      },
      coordinates: []
    }
  
},{timestamps:true, versionKey: false})

module.exports = mongoose.model("Place",placeSchema)