const mongoose = require('mongoose');
const Places = require('../models/places.model');

const dbName = 'Places';
mongoose.connect(`mongodb://localhost/${dbName}`);


const places = [
  {
    name: " Coffee Relax",
    type: "Coffee Shop",
    location: {
      type: 'Point',
      coordinates: [40.409286, -3.710027],
    }
  },
]


Places
  .create(places)
  .then(placesBase => {
    console.log(`Created ${placesBase.length} places`)
    mongoose.connection.close();
  })
  .catch(err => console.log('Hubo un error,', err))