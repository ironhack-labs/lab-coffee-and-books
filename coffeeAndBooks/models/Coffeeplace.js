const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coffeeplaceSchema = new Schema({
  name: String,
  description: String,
  location: {
    Lat: Number,
    Long: Number,
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Coffeeplace = mongoose.model("Coffeeplace", coffeeplaceSchema);

module.exports = Coffeeplace;