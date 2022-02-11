
const { Schema, model } = require('mongoose')

const placeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },



  type: {
    type: String,
    enum: ["Bookstore", "CoffeeShop"],
    required: true
  },
  location: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  }
},
  { timestamps: true })


placeSchema.index({ location: '2dsphere' })

module.exports = model('Place', placeSchema)







