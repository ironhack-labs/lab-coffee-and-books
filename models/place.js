const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  description: String,
  votesPos: { type: Number, min: 0 },
  votesNeg: { type: Number, min: 0 },
  type: {
    type: String,
    enum: ['coffee', 'bookstore'],
  },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    lat: String,
    lng: String,
  },
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

const Place = mongoose.model("Place", userSchema);

module.exports = Place;

