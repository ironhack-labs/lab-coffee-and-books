const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    kindOf: String,
    loc: { type: { type: String }, coordinates: [Number]}
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;

