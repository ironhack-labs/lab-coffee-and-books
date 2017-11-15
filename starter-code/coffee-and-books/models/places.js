const mongoose = require("mongoose");
var GeoJSON = require("mongoose-geojson-schema");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  type: String,
  location: { type: { type: String }, coordinates: [Number] }
});

// location: {
//   longitude: Number,
//   latitude: Number
// }
// });

placeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Place", placeSchema);
