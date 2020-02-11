const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['COFFE SHOP', 'BOOKSTORE'],
  },
  location: { type: { type: String }, coordinates: [Number]}
},
  { timestamps: true }
)


module.exports = mongoose.model('Place', placeSchema);



