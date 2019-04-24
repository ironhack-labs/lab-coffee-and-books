const mongoose = require("mongoose")

//En Location hay tipo de dato point para poder comparar distancias con Mongo DB

const placeSchema = new mongoose.Schema({
  name:String,
  image:String,
  category:{
    type: String,
    enum: ["coffee shop", "bookstore"]
  },
  location:{
    address: {
      type:String,
      default: "Point"
    },
    coordinates:[Number]
  }
}, {
  timestamps: true,
  versionKey: false
}
)

module.exports = mongoose.model("Place", placeSchema)