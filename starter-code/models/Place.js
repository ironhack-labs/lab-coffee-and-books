const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: String,
  type: String,
  location: { type: { type: String }, coordinates: [Number]}
},
{timestamps:true}
);

PlaceSchema.index({ location: '2dsphere' })
const Place = mongoose.model("Place", PlaceSchema);
module.exports = Place;


