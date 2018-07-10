const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema ({
  name: {type: String, required: true},
  description: String,
  boc: String,
  location: {
    type: {type: String},
    coordinates: [Number]
    }
  }
);

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;