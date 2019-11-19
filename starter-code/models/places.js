const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = ({
  name: String,
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore'],
    default: 'coffee shop'
  },
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Place = mongoose.model("place", placeSchema);

module.exports = Place; 