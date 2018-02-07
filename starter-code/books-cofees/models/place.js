// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const PlaceSchema = new Schema({
//   location: {
//     type: { type: String },
//     coordinates: [Number]
//   },
//   name: String,
//   description: String
// });
// const Place = mongoose.model("Place", PlaceSchema);
// module.exports = Place;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  imageUrl: String,
  description: String
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
