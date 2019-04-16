const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  type: { type: String, enum : ['Coffee Shop', 'Bookstore'] },
  location: {coordinates: [Number] }
}, {
    timestamps: true
  });

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;