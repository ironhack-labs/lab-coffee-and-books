const mongoose = require('mongoose');
const Place = require('../models/Place')

mongoose.connect('mongodb://localhost/coffee-books')

const places = [
  {
    name: 'Café Legazpi',
    location: {
      lat: 40.436839,
      lng: -3.692079
    },
    kind: 'Coffee'
  },
  {
    name: 'Café Museo Sorolla',
    location: {
      lat: 40.435841,
      lng: -3.692477
    },
    kind: 'Coffee'
  },
  {
    name: 'Libreria Spiderman',
    location: {
      lat: 40.432481,
      lng: -3.697344
    },
    kind: 'Books'
  },
  {
    name: 'Libreria Dr Strange',
    location: {
      lat: 40.431924,
      lng: -3.700048
    },
    kind: 'Books'
  }
];

Place.collection.drop();

places.forEach( p => {
    let pl = new Place(p);
    pl.save((err, pla) =>{
        if(err) {
            throw err;
        }
        console.log(`Producto guardado ${pla.name}`);
    })
});