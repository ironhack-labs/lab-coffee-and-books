let mongoose=require("mongoose")
let Schema = mongoose.Schema

let placeSchema =new Schema ({
  name:String,
  category:{
    type:String,
    enum:["restaurant","bar","coffee","social","education"]
  },
  stars:{
    type:Number,
    enum:[1,2,3,4,5]
  },
  address:{
    location:{
      type:String,
      default:"Point"
    },
    coordinates:[]
}

},{timestamps:true,versionkey:false})

module.exports=mongoose.model("Place",placeSchema)

