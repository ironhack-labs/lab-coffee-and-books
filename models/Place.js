const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name:String,
    location:{
        type:{
            type:String,
            default:'Point'
    },
        address:String,
        coordinates:[{
            type:Number
        }]

    },
    lugar:{
        type: String,
        enum:['coffeStore','bookStore'],
        default: 'coffeStore'
    }



},  {timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
})

module.exports = require ('mongoose').model("Place", placeSchema)