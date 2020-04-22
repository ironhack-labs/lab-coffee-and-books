const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cafeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ["Coffe shop", "Bookstore"]
  },
  location: { type: { type: String }, coordinates: [Number] }
 }, { timestamps: true })

cafeSchema.index({ location: '2dsphere' })

const Cafe = mongoose.model('Cafe', cafeSchema)

module.exports = Cafe