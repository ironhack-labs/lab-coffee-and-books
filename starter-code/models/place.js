const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const schemaName = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
}, {
  timestamps: true
});

schemaName.index({
  location: '2dsphere'
});

const Model = mongoose.model("Places", schemaName);
module.exports = Model;