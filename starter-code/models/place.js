const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: String,
    type: {
        type: String,
        enum: ['coffe shop', 'Book store']
    },
    location: { type: { type: String }, coordinates: [Number] }
},

     {timestamps: true}
      );

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
