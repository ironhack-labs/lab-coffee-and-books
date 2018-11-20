const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  location: {
    type: {type: { type: String }, coordinates: [Number]  },
  },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});


module.exports =  mongoose.model('place', placeSchema);