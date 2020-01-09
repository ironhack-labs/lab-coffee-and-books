const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffee shop',
      'bookstore'
    ],
  }
},{
  timestamps: true
});

const Place = mongoose.model('Place',localSchema);

// exportar o model
module.exports = Place;