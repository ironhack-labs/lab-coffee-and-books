const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const PLM      = require('passport-local-mongoose')

const placeSchema = new Schema({
 name: String,
 enum:['CAFE', 'BOOK'],
 location:{
     type:{
       type: String,
       default:"point"
 },
 address: String,
 coordinates:[{
   type: Number
   }]
 }
},{
 timestamps: {
   createdAt: 'created_at',
   updatedAt: 'updated_at'
 }
})


module.exports = mongoose.model('Place', placeSchema)