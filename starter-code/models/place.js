const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const schemaName = new Schema({
  name:  String,
  type: {
      type: String,
      enum: [
        "Coffee Shop",
        "Bookstore"
        ],
      },
  location: { lat: Number , log: Number}

},  {
      timestamps: true
  }
);

const Model = mongoose.model('Place', schemaName);
module.exports = Model;