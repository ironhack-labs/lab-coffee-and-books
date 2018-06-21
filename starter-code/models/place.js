const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  location: { 
    type: { type: String }, 
    coordinates: [Number] 
    },
  product: {
      type: String,
      enum : ['Books', 'Coffee']
    }
});
placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);
