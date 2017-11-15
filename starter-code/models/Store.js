const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const storeSchema = new Schema({
  name: String,
  type: String,
  location: String,
  city: String,
  latitude: String,
  longitude: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
