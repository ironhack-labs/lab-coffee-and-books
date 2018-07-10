require('dotenv').config();

const mongoose = require('mongoose');
const BookStore = require('../models/bookStore');

const dbURL = process.env.DBURL;


const bookStores = [{
    name: 'Librería Embajadores de Sueños',
    description: 'Una Librería cerca de Matadero',
    location: {
      type: 'Point',
      coordinates: [40.3815107,-3.7034137]
    }
  },
  {
    name: 'Gea Libros',
    description: 'Otra librería cerca de Matadero',
    location: {
      type: 'Point',
      coordinates: [40.3815107,-3.7034137]
    }

  },
  {
    name: 'Librería Mayo (Psicología)',
    description: 'Otra librería más cerca de Matadero',
    location: {
      type: 'Point',
      coordinates: [40.3815107,-3.7034137]
    }
  }

];
mongoose.connect(dbURL, {
    useMongoClient: true
  })
  .then(() => {
    console.log('Connected to DataBase')
    BookStore.collection.drop();
    BookStore.create(bookStores)
      .then(() => {
        console.log('Book Stores created!!');
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log('Error storing Book Stores');

      });

  });