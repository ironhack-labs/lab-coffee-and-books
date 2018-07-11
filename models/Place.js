const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: String,
  specie:{
    type:String,
    enum:['bookStore', 'coffeeShop', 'mix'],
    default: 'cafebrería'
  },
  location:{
    type:{
        type:String,
        default:'Point'
    },
    address:String,
    coordinates:[{
        type:Number
    }]

} 
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// +userSchema.plugin(passportLocalMongoose, {usernameField: 'email'})
module.exports = mongoose.model('Place', placeSchema);
