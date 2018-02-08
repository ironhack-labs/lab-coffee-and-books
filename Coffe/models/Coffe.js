const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CoffeSchema = new Schema({
  name: String,
  imageUrl: String,
  description: String,
  location: {lat:Number , lng: Number}
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });
const Coffe = mongoose.model('Coffe', CoffeSchema);
module.exports = Coffe;

