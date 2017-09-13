const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const shopSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String },
  coordinates: [Number] }
});

shopSchema.index({ location: '2dsphere' });
const Shop = mongoose.model('User', shopSchema);

module.exports = Shop;
