const mongoose = require('mongoose');
const Place = require('../models/place.model');

const dbName = 'places';
mongoose.connect(`mongodb://localhost/${dbName}`);


// const places = [
//     {
//         name: 'Santa Eulalia',
//         place: 'coffee shop',
// description
//     },
//     {
//         name: 'Books World',
//         place: 'bookstore',

//     }
// ];


Place
    .create(places)
    .then(allPlacesCreated => {
        console.log(`Created ${allPlacesCreated.length} places`)
        mongoose.connection.close();
    })