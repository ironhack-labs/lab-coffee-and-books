const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description:{
    type: String,
    enum : ['coffeeshop', 'bookstore'],
  },
  coordinates: [Number, Number]  // index 0 is lat, index 1 is long
});
// placeSchema.index({ location: '2dsphere' });


const Place = mongoose.model("Place", placeSchema);


module.exports = Place;
