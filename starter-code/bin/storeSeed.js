require('dotenv').config();

const mongoose = require('mongoose');
const Store = require('../models/store');

const dbURL = process.env.DBURL;


const stores = [{
    name: 'Librería Embajadores de Sueños',
    description: 'Una Librería cerca de Matadero',
    boc: 'Book',
    location: {
      type: 'Point',
      coordinates: [40.3815107,-3.7034137]
    }
  },
  {
    name: 'Gea Libros',
    description: 'Otra librería cerca de Matadero',
    boc: 'Book',
    location: {
      type: 'Point',
      coordinates: [40.3815107,-3.7034137]
    }

  },
  {
    name: 'Librería Mayo (Psicología)',
    description: 'Otra librería más cerca de Matadero',
    boc: 'Book',
    location: {
      type: 'Point',
      coordinates: [40.3815107,-3.7034137]
    }
  },
  {
    name: 'Cafetería Fátima',
    description: 'Una cafeteria cerca de Matadero',
    boc: 'Coffee',
    location: {
      type: 'Point',
      coordinates: [40.3841826, -3.7057389]
    }
  },
  {
    name: 'Granier',
    description: 'Un granier cerca de Matadero',
    boc: 'Coffee',
    location: {
      type: 'Point',
      coordinates: [40.381448, -3.7034137]
    }

  },
  {
    name: 'Churrería Legazpi',
    description: 'Una churreria cerca de Matadero',
    boc: 'Coffee',
    location: {
      type: 'Point',
      coordinates: [40.381448, -3.7034137]
    }
  }

];
mongoose.connect(dbURL, {
    useMongoClient: true
  })
  .then(() => {
    console.log('Connected to DataBase')
    Store.collection.drop();
    Store.create(stores)
      .then(() => {
        console.log('Stores created!!');
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log('Error storing Stores');

      });

  });