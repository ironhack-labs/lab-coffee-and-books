const mongoose = require('mongoose')
const Schema = mongoose.Schema


const placeSchema = new Schema({

    name: {
        type: String
    },

    placeType: {
        type: String,
        enum: ['Coffee shop', 'Bookstore']
    },

    photo: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnv15Z_LEGyxEjrDClH7WgpnTNFQwe3GyJzg&usqp=CAU'
    },

    location: {
        type: {
            type: String
        },
        coorinates: {
            type: [Number]
        }
    }
}, {
    timestamps: true
})
    
module.exports = mongoose.model('Place', placeSchema)