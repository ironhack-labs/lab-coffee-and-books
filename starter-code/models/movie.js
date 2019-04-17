const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {type: String, required: true},
  genre: {type: Number, min:0,max:90},
  plot: {type: Number, min:0,max:90},
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie