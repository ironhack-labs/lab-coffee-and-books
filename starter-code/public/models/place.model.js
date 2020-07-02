const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
  name: String,
  type: {
      type: String,
      enum: ['coffee shop', 'bookstore']
  },
 }, {timestamps: true}
)

module.exports = mongoose.model('Place', placeSchema)