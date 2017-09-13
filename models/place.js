const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/ibi-ironhack',  {useMongoClient: true});
// mongoose.Promise = require('bluebird');

const placeSchema = new Schema({
    name: {type: String},
    location: {
                latitude: {type: String},
                longitude: {type: String},
            },
    type: {type: String}
});

const Place = mongoose.model('place', placeSchema);
module.exports = Place;