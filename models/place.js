const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name:String, 
    lugar: {
        type: String,
        enum: ['librería', 'cafetería'],
        default: 'librería',
        },

        location:{
            type: {
                type: String,
                default:'Point'
                },
         addres: String,
        coordinates:[{ type:Number }]
        }

},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('Place', placeSchema)