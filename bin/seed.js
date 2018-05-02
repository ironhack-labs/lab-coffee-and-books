const mongoose = require('mongoose');
const Place = require('../models/Place');

const dbName = 'lab-coffee-and-books';
mongoose.connect(`mongodb://localhost/lab-coffee-and-books`);

const places = [
  {
    name: 'Librería Fábula',
    typeOfEstablishment: 'BOOKSTORE',
    location:{
      lat: 19.4066836,
      lng: -99.1716416
    }
  },
  {
    name: 'Delti',
    typeOfEstablishment: 'BOOKSTORE',
    location:{
      lat: 19.405226,
      lng: -99.1717274
    }
  },
  {
    name: 'Librería Porrua',
    typeOfEstablishment: 'BOOKSTORE',
    location:{
      lat: 19.405226,
      lng: -99.1717274
    }
  },
  {
    name: 'El Pendulo',
    typeOfEstablishment: 'BOOKSTORE',
    location:{
      lat: 19.405226,
      lng: -99.1717274
    }
  },
  {
    name: 'Casa del Libro',
    typeOfEstablishment: 'BOOKSTORE',
    location:{
      lat: 19.4150452,
      lng: -99.20233
    }
  },
  {
    name: 'CENTRO',
    typeOfEstablishment: 'COFFEEPLACE',
    location:{
      lat: 19.3973399,
      lng: -99.1762804
    }
  },
  {
    name: 'Cielito Querido',
    typeOfEstablishment: 'COFFEEPLACE',
    location:{
      lat: 19.397517,
      lng: -99.1727077
    }
  },
  {
    name: 'Cafe Passmar',
    typeOfEstablishment: 'COFFEEPLACE',
    location:{
      lat: 19.3967276,
      lng: -99.1727077
    }
  },
  {
    name: 'Cafe EMIR',
    typeOfEstablishment: 'COFFEEPLACE',
    location:{
      lat: 19.3963785,
      lng: -99.1740059
    }
  },
  {
    name: 'Chiquitito Cafe',
    typeOfEstablishment: 'COFFEEPLACE',
    location:{
      lat: 19.3963785,
      lng: -99.1740059
    }
  }
]

Place.create(places, (err) => {
  if (err)throw(err)
  console.log(`Created ${places.length} places`)
  mongoose.connection.close()
});