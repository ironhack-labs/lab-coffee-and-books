const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cofboktSchema = new Schema({
    name:String,
    type:{
        type:String,
        enum: ['COFFE', 'BOOKSTORE'],
        default: 'COFFE'
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
})

module.exports = mongoose.model('Cofbok', cofboktSchema)