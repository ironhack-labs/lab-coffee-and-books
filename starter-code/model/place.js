const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const placesSchema = new Schema({
  name: String,
  timestrap: String,
  type:{enum:[coffee,libray]}
});

placesSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('place', placesSchema);