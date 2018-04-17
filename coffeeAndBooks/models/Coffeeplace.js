const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coffeeplaceSchema = new Schema({
  name: String,
  location: { 
    type: { type: String, default: 'Point'}, 
    coordinates: [Number] }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

coffeeplaceSchema.index({ location: '2dsphere' });

const Coffeeplace = mongoose.model("Coffeeplace", coffeeplaceSchema);

module.exports = Coffeeplace;