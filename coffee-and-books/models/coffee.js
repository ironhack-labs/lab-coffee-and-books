const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const coffeeSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

coffeeSchema.index({ location: '2dsphere' });

const Coffee = mongoose.model("Coffee", coffeeSchema);
module.exports = Coffee;