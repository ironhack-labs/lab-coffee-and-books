const mongoose = require('mongoose');
const Places = require('../models/Place');

const places = [
    {
        name: 'Trasmontana',
        type: 'coffee shop'
    },
    {
        name: 'La Central',
        type: 'bookstore'
    },
    {
        name: 'Starbucks',
        type: 'coffee shop'
    },
    {
        name: 'Panta Rhei',
        type: 'bookstore'
    },
]

mongoose
    .connect('mongodb://localhost/places', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        places.forEach(element => {
            Places.create(element, function (err, user) {
                if (err) {
                    console.log('An error happened:', err);
                } else {
                    console.log('The place is saved and its value is: ', element);
                }
            });
        });
    })
    .catch(err => {
        console.error('Error connecting to Mongo', err)
    })