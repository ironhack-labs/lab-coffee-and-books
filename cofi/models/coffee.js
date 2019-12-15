const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  name: String,
  desc: String,
  location: {
      type: {
          type: String,
          default: "Point"
      },
      coordinates: [Number]
  }
});

coffeeSchema.index({location:"2dsphere"});

module.exports = mongoose.model("Coffee", coffeeSchema);