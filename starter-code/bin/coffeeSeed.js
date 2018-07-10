require('dotenv').config();

const mongoose = require('mongoose');
const CoffeeStore = require('../models/coffeeStore');

const dbURL = process.env.DBURL;


const coffeeStores = [{
    name: 'Cafetería Fátima',
    description: 'Una cafeteria cerca de Matadero',
    location: {
      type: 'Point',
      coordinates: [40.3841826, -3.7057389]
    }
  },
  {
    name: 'Granier',
    description: 'Un granier cerca de Matadero',
    location: {
      type: 'Point',
      coordinates: [40.381448, -3.7034137]
    }

  },
  {
    name: 'Churrería Legazpi',
    description: 'Una churreria cerca de Matadero',
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
    CoffeeStore.collection.drop();
    CoffeeStore.create(coffeeStores)
      .then(() => {
        console.log('Coffee Stores created!!');
        mongoose.disconnect();
      })
      .catch((err) => {
        console.log('Error storing Coffee Stores');

      });

  });