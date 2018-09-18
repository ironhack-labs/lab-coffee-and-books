const mongoose= require("mongoose");
const Schema =mongoose.Schema;

const placeSchema = new Schema({
  name:String,
  kind:{type:String, enum:["coffee","book"]},
  location: { type: { type: String }, coordinates: [Number] }
})

placeSchema.index({location:"2dsphere"});

let Place = mongoose.model("place",placeSchema);

module.exports=Place;