const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/coffe&books");

const LocationSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

LocationSchema.index({ location: '2dsphere' });

const LocationModel = mongoose.model("LocationModel", LocationSchema);


module.exports = LocationModel;
