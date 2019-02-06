const mongoose=require('mongoose')
const Schema=mongoose.Schema

const restaurantSchema=new Schema({

  name:String,
  type:String, enum :['coffeeshop', 'bookstore'],
  location:{type:{type:String},coordinates:[Number]}}, 
  {
    timestamps: true
  })

  const Restaurant=mongoose.model("restaurant",restaurantSchema)


restaurantSchema.index({location: '2dsphere'})
module.exports=Restaurant