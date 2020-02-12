const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  business: { type: String, enum: ["coffeeshop", "bookstore"] },
  location: { lat: Number , lng: Number }
},
  {timestamps : true}
)

const Model = mongoose.model('coffeeandbooks', schemaName);
module.exports = Model;


