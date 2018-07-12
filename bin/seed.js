const mongoose = require('mongoose');
const Places = require('../models/places');

mongoose.connect('mongodb://localhost/coffee-books', {useMongoClient: true})
.then(() => {
    Places.collection.drop();

    const newPlaces = [
        {name: "Coffee1", location: {type: "Point", coordinates: [40.3980374, -3.694459199999983]}},
        {name: "Coffee2", location: {type: "Point", coordinates: [40.4577678, -3.710624400000029]}},
    ]

    Places.insertMany(newPlaces)
    .then(() => {
        console.log('Places Added!');
        mongoose.disconnect();
    })
    .catch(err => {
        console.log(err);
        mongoose.disconnect();
    })
})
