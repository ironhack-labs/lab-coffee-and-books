const mongoose=require('mongoose')
const Schema=mongoose.Schema

const restaurantSchema=new Schema({

  name:String,
  type:String, enum :[coffee, shop, bookstore],
  timestamps: { createdAt: 'created_at',updatedAt:'updated_at' }
})

restaurantSchema.index(location, '2dsphere')