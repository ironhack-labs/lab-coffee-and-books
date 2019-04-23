require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

const places = [
  {
    name: 'Centro de Salud',
    image:
      'https://mxcity.mx/wp-content/uploads/2015/08/pulqueria-el-centro-de-salud-1-300x225.jpg',
    category: 'Bar',
    stars: 3,
    location: {
      coordinates: [-99.163719, 19.416535]
    }
  },
  {
    name: 'Orinoco',
    image: 'https://media.timeout.com/images/104580055/630/472/image.jpg',
    category: 'Restaurant',
    stars: 3,
    location: {
      coordinates: [-99.1670934, 19.4176674]
    }
  }
];

mongoose
  .connect(process.env.DB)
  .then(() => {
    Place.create(places).then(places => {
      console.log(`You created ${places.length} new places`);
      mongoose.connection.close();
    });
  })
  .catch(err => {
    console.log(err);
  });
