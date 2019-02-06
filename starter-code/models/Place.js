const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({name: String,
  type: {
    type: String,
    location: { type: { type: String }, coordinates: [Number] },
    enum: ['coffee', 'shop', 'bookstore']
  } }, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updataded_at' }
});

const Place = mongoose.model('Place', userSchema);
module.exports = Place;
