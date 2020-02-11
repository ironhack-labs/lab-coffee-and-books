const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: [`coffee shop`, `bookstore`]
  }
},
{ timestamps: true }
);

const Model = mongoose.model('Place', catSchema);
module.exports = Model;