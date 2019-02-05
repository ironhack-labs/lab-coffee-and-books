const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {type: String, enum: ['coffee shop, bookstore']},
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place',placeSchema);

Place.add = function(name, type, lat, lng){
  return Place.create({
    name, type,
    location:{
      type:"Point",
      coordinates:[lat,lng]
    }
  })
}



module.exports = Place;