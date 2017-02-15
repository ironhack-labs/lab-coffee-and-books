const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let shopSchema = new Schema ({
  name: String,
  description: String,
  location: {type: {type: String}, coordinates: [Number]}
});

shopSchema.index({location: '2dsphere'});

let Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
