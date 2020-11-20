const mongoose = require('mongoose');
const Place = require('../models/Place.model');

const dbName = 'places-database';

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

Place.collection.drop()

const places = [
    {
        name: 'Bakery Cafe Audrey',
        type: 'coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.457826, -3.710612]
        }
    },
    {
        name: 'Sona Coffee & Deli',
        type: 'coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.450844, -3.698802]
        }
    },
    {
        name: 'Dunkin',
        type: 'coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.451318, -3.703582]
        }
    },
    {
        name: 'Modesta Librería',
        type: 'bookstore',
        location: {
            type: 'Point',
            coordinates: [40.441534, -3.696127]
        }
    },
    {
        name: 'Libros Usados GO',
        type: 'bookstore',
        location: {
            type: 'Point',
            coordinates: [40.453907, -3.703967]
        }
    },
    {
        name: 'TodoPapel',
        type: 'bookstore',
        location: {
            type: 'Point',
            coordinates: [40.450136, -3.705969]
        }
    }
]

Place
    .create(places)
    .then(places => console.log(`${places.length} Places have been created`))
    .catch(error => console.log(`There's been an error creating places:${error}`))
