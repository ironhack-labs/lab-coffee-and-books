const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const placesSchema = new Schema ({
  name:String,
  type: {type: String, enum: ["cofee shop", "bookstore"]},
  location: { type: { type: String }, coordinates: [Number] }
}, {
  timestamps:true
});

placesSchema.index({ location: '2dsphere' });
module.exports = mongoose.model("Place", placesSchema);