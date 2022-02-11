const { Schema, model  } = require("mongoose");

const placeSchema = new Schema({
    name: String,
    
      type:{ 
      type: String, enum: ["Coffe shop", "Bookstore"]
    },
  
  location:{ 
    type: { type: String },
  coordinates:[Number] }
},
  {
    timestamps: true
  }
)

placeSchema.index({ location: '2dsphere'})
const Place = model("place", placeSchema);

module.exports = Place;
