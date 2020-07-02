const mongoose = require('mongoose');

const Place = require('../models/place.model');

mongoose.connect('mongodb://localhost/coffee-and-books')


const places = [{
        name: 'La Central de Callao',
        typeOfPlace: 'bookstore',
        location: {
            type: 'Point',
            coordinates: [40.419766, -3.705030]
        }
    },
    {
        name: 'Traficantes de sueños',
        typeOfPlace: 'bookstore',
        location: {
            type: 'Point',
            coordinates: [40.411810, -3.706093]
        }
    },
    {
        name: 'La Mallorquina',
        typeOfPlace: 'coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.416730, -3.704459]
        }
    },
    {
        name: 'Cafetería Esparteros',
        typeOfPlace: 'coffee shop',
        location: {
            type: 'Point',
            coordinates: [40.415497, -3.704848]
        }
    }
]
Place
    .create(places)
    .then(allThePlaces => {
        console.log(`Places created: ${allThePlaces}`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred: ${err}`))