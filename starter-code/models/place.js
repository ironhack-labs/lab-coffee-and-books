const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name : String,
  type : {type : String, enum : [ "coffee shop","bookstore" ] },
  location: { type: { type: String }, coordinates: [Number] },
  timeStamps: Date
});

const Model = mongoose.model('Place', schemaName);
module.exports = Model;