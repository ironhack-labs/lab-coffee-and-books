const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookplaceSchema = new Schema({
  name: String,
  location: { 
    type: { type: String, default: 'Point'}, 
    coordinates: [Number] }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Bookplace = mongoose.model("Bookplace", bookplaceSchema);

module.exports = Bookplace;