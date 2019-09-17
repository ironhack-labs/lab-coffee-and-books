const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const placeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    enum: ["coffee shop", "bookstore"],
  },
  location: { type: { type: String }, coordinates: [Number] },
}, 
{
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete doc._id;
      delete ret.__v;
      return ret;
    }
  }

})
placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;