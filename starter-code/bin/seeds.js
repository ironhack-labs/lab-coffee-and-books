const mongoose = require('mongoose');
const Book = require('../models/place-model');

const dbName = 'coffee-books-lab';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const places = [
  {
    name: 'La Central de Callao',
    type: 'bookstore',
    location: {
      type: 'Point',
      coordinates: [40.419766, -3.705030]
    }
  },
  {
    name: 'Traficantes de sueños',
    type: 'bookstore',
    location: {
      type: 'Point',
      coordinates: [40.411810, -3.706093]
    }
  },
  {
    name: 'La Mallorquina',
    type: 'coffee shop',
    location: {
      type: 'Point',
      coordinates: [40.416730, -3.704459]
    }
  },
  {
    name: 'Cafetería Esparteros',
    type: 'coffee shop',
    location: {
      type: 'Point',
      coordinates: [40.415497, -3.704848]
    }
  }
]

Book.create(places)
  .then(allThePlaces => {
    console.log(`Places created: ${allThePlaces}`)
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error ocurred: ${err}`))  