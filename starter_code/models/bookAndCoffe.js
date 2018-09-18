const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookAndCoffeSchema = new Schema({
  name: { type: String, required: true},
  category: {type: String, required:true, enum: ['BOOKSTORE', 'COFFEPLACE']},
  location: { type: {type: String}, coordinates: [Number]}
});
bookAndCoffeSchema.index({location: '2dsphere'});

module.exports = mongoose.model('BookAndCoffe', bookAndCoffeSchema);