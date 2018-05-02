const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const placeSchema = new Schema({
    name:{type:String,required:true},
    store:{type:String, enum:["BookStore","CoffeeShop"]},
    lat:{type:String,required:true},
    lgn:{type:String,required:true}
});

module.exports = mongoose.model("Place",placeSchema);