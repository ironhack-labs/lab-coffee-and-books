const Schema = require('mongoose').Schema

const placeSchema = new Schema ({
  name: String,
  type: {
    type: String,
    enum: ["cofee shop", "bookstore"]
  },
  location: {
    type:{
      type: String,
    },
    coordinates: [Number]
  }
},
{
  timestamps: {
    createdAt: true,
    updatedAt: true
  },
  versionKey: false
})

module.exports = require('mongoose').model('Place', placeSchema)