const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const placeSchema = new Schema({
  name: { type: String, unique: true },
  type: { type: String, enum: ['coffee shop', 'bookstore'] },
  location: { type: { type: String }, coordinates: [Number] }
},
{
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
});

placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);
