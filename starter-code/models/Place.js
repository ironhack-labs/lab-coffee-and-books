const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const PlaceSchema = new Schema({
  name: {type : String, required: [true, 'Please, insert the name of the stablishment']},
  kind: {type : String, required: [true, 'Please, insert a kind of stablishment']},
  location: { type: { type: String }, coordinates: [Number] }
});
RestaurantSchema.index({ location: '2dsphere' });


const Place = mongoose.model("Place", userSchema);

module.exports = Place;
