const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore'],
    default: 'coffee shop'
  },
  location: {
    type: { type: String },
    coordinates: [Number]
  }
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });


placeSchema.index({ location: '2dsphere' })


//nombre del Model = Place aconsejan mejor en MAYUSCULAS para diferenciarlo
const Place = mongoose.model("Place", placeSchema);
//ojo sino es "place",placeSchema

module.exports = Place;