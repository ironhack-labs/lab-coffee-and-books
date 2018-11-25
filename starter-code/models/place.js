const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {type: String, enum: ['coffee shop', 'bookstore']},
  description: String,
  location: {type: {type: String}, coordinates: [Number]}
},{
  timestamps: true
})

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', placeSchema);

Place.add = function(name, type, description, lat, lng){
  return Place.create({
    name,
    type,
    description,
    location: {
      type: "Point",
      coordinates: [lat,lng]
    }
  })
}


module.exports = Place;
