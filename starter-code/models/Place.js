let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let placeSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['Coffee shop', 'Bookstore']
    },
        address:{
            location:{
                type: String,
                default: 'Point',
            },
            coordinates: []
        }
},
    {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model('Place', placeSchema)