const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/coffee-books');


const PlaceSchema = new Schema({
    name: {type: String},
    category: {type: String},
    location: { type: { type: String }, coordinates: [Number] }
   
});

PlaceSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;