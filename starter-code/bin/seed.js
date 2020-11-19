const mongoose = require('mongoose');
const Place = require('../models/place.model');

const dbName = 'coffee-books-webmad1020';
mongoose.connect(`mongodb://localhost/${dbName}`);



const places = [

  {
    name: "Peet's Coffe",
    descrption: "Great coffee in a friendly neighborhood.",
    type: 'Coffee Shop',
    location: {
      type: 'Point',
      coordinates: [42.349233, -71.081722]
    }
  },
  
  {
    name: "Blue Bottle Coffe",
    descrption: "The Best place for all things coffee related!",
    type: 'Coffee Shop',
    location: {
      type: 'Point',
      coordinates: [42.350846, -71.078773]
    }
  },
  
  {
    name: "Trident Book Sellers and Cafe",
    descrption: "Cozy little bookstore.",
    type: 'Bookstore',
    location: {
      type: 'Point',
      coordinates: [42.348192, -71.086604]
      }
    },
  {
    name: "Barnes and Noble",
    descrption: "A centrally located bookstore with a cafe and a nice reading area.",
    type: 'Bookstore',
    location: {
      type: 'Point',
      coordinates: [42.348333, -71.082475]
    }
  },
  
];

Place
    .create(places)
    .then(allPlaces => {
        console.log(`Created ${allPlaces.length} places`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))