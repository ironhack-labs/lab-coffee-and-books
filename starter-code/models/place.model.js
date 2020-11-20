
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: String,
  type:{
    type:String,
    enum:["Bookstore", "Coffee Shop"]
  },
  location: {                 // new!
    type: {
      type: String
    },
    coordinates: [Number]
  }
}, { timestamps: true }
)


placeSchema.index({ location: '2dsphere' })
const Place = mongoose.model('places', placeSchema)

module.exports = Place