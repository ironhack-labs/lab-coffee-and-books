const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  originalName: String,
  name: String,
  description: { type: String, default: 'There is no description yet, add some now'},
  image: { type: String, default: 'https://st2.depositphotos.com/4231857/6759/v/950/depositphotos_67592533-stock-illustration-set-of-stylized-food.jpg'},
  type: {
    type: String,
    enum: ['coffee shoṕ', 'bookstore', 'all places']
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
},
  {
    timestamps: true
  });
placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);