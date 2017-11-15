const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const happyplaceSchema = new Schema({
  name  : String,
  type: String,
  location: { type: { type: String }, coordinates: [Number] }
});
happyplaceSchema.index({ location: '2dsphere' });


const Happyplace = mongoose.model('Happyplace', happyplaceSchema);
module.exports = Happyplace;
