const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema ({
  name : {type: String },
  category : {type: String },
  location: { type: String }, coordinates: [Number] }
});
PlaceSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
