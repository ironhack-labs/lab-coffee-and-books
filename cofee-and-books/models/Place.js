const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  desc: String,
  image: String,
   
  // Structura tipíca de un GeoJSON

  location: {
      type: {
          type: String,
          default: "Point"
      },
      coordinates: [Number]
  }
});

placeSchema.index({location:"2dsphere"});

module.exports = mongoose.model("Place", placeSchema);

