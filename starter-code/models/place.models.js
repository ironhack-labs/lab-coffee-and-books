const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  name: String,
  type: { 
      type: String,
    enum:['coffee shop','bookstore']
  },
  location: {
    type: { type: String },
    coordinates: [Number]
  }
  
  
});



coffeeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', coffeeSchema);
