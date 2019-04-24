const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: String,
  category: {
    type: String,
    enum: ['Coffee Shop', 'Bookstore']
  },
  location: {
    address: {
      type: String,
      defautl: 'Point'
    },
    coordinates: [Number]
  }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Place', placeSchema)