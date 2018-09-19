const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cafeteriasSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

cafeteriasSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('cafeterias', cafeteriasSchema);