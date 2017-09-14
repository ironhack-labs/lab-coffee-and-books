const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const shopSchema = new Schema({
  name: { type: String },
  description: { type: String },
  location: {
    type: { type: String },
    coordinates: [Number]
  }
});

shopSchema.index({ location: '2dsphere' });
const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;


//We need this model to be able to store info about
// the location we want to save in the database.
