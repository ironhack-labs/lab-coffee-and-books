const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/mapsCoffeeBooks'); 

const Place = require('../models/place');

const places = [
    { name: 'Starbucks', type: 'coffee shop', location: {type: "Point", coordinates: [40.41267755706513, -3.740606573290961]}},
    { name: 'LA casa del libro', type: 'bookstore', location: {type: "Point", coordinates: [40.43619982120086, -3.7018111020995548]}},
    { name: 'Libreria', type: 'bookstore', location: {type: "Point", coordinates: [40.457101594458436, -3.6393263608886173]}},
  ]

Place.collection.drop();

Place.insertMany(places)
.then(place => {
    console.log("places created");
    console.log(place);

    mongoose.connection.close();
})
.catch(err => console.error(err));