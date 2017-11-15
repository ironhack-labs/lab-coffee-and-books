const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const placesSchema = new Schema({
    name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] }
  
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });
  
  placesSchema.index({ location: '2dsphere' });
  
  const Places = mongoose.model("Places", placesSchema);
  
  module.exports = Places;