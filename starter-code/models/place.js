const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name:String,
  type: { type: String, enum: ['coffee shop', 'bookstore'] },
  location: { type: { type: String }, coordinates: [Number] }
},{
  timestamps:true
})

schema.index({ location: '2dsphere' });

const Place = mongoose.model('Place',schema);

Place.add = function(name, type, lat, lng){
  return Place.create({
    name, type,
    location:{
      type:"Point",
      coordinates:[lat,lng]
    }
  })
}

module.exports = Place