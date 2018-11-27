const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    //NOMBRE DE LOCAL
    name:String,
    //UBICACION
    type:{
        type:String,
        default: "Point"
    },
    coordinates:[Number],
    //TIPO DE LOCAL
    tipo:{
        type:String,
        enum:['Coffee Shop','Bookstore'],
        default:'Coffe Shop'
    },
},
{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
})

module.exports = mongoose.model("Place",placeSchema)