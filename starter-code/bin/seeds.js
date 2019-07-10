const mongoose = require('mongoose');
const Place = require('../models/place');

const dbtitle = 'maps-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const places = [
  {
    name: 'Café Moinho',
    type: 'coffeeshop',
    location: {
      type: 'Point',
      coordinates: [-23.561659, -46.658443],
    },
  },
  {
    name: 'Agro Café Juanin',
    type: 'coffeeshop',
    location: {
      type: 'Point',
      coordinates: [-23.562235, -46.665024],
    },
  },
  {
    name: 'Livraria da Vila',
    type: 'bookstore',
    location: {
      type: 'Point',
      coordinates: [-23.562758, -46.667558],
    },
  },
  {
    name: 'Livraria Martins Fontes',
    type: 'bookstore',
    location: {
      type: 'Point',
      coordinates: [-23.558448, -46.663197],
    },
  },
];

Place.create(places, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${places.length} places`);
  mongoose.connection.close();
});
