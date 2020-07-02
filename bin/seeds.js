const mongoose = require('mongoose')
const Place = require('../models/places.model')

const dbtitle = 'coffe&books'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })
Place.collection.drop()

const myPlaces = [{
        name: 'Prioritè Art',
        placeType: 'Coffee shop',
        photo: 'https://console.listae.com/files/2014/04/priorite_montera.jpg',
        location: {
            type: 'Point',
            coordinates: [40.419339, -3.701684]
        }
    },
    {
        name: 'Zero Point',
        placeType: 'Coffee shop',
        photo: 'https://madridsecreto.co/wp-content/uploads/2018/10/zero-point-coffee-shop-819x1024.jpg',
        location: {
            type: 'Point',
            coordinates: [40.409984, -3.696857]
        }
    },
    {
        name: 'Livraria Ler Devagar',
        placeType: 'Bookstore',
        photo: 'https://www.spottedbylocals.com/lisbon/files/livraria-ler-devagar-lisbon-by-nuno-lopes-de-paula-414x276.jpg',
        location: {
            type: 'Point',
            coordinates: [38.702800, -9.178439]
        }
    }
]


Place.create(myPlaces)
    .then(() => mongoose.connection.close())
    .catch(err => console.log('Error en el Seed', err))


