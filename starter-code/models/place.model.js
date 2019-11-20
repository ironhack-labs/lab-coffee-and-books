const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeBooksSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum:['coffee shop', 'bookstore']}
},{
    location: { type: { type: String }, coordinates: [Number] }
},
 {
    timestamps: true
})

module.exports = mongoose.model('Places', coffeBooksSchema);