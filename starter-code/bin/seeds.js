const mongoose = require('mongoose');
const Place = require('../models/Place');

mongoose.connect("mongodb://localhost/place-ironhack");

const places = [{
  name: "Hola café",
  description: "Hola café",
  type: "Coffe",
  location: { lat:40.416937, lng: -3.704513}
},
{
  name: "Ruda",
  description: "Ruda café",
  type: "Coffe",
  location: { lat: 40.416138, lng: -3.704513 }
},
{
  name: "Lee",
  description: "Lee Shop",
  type: "BookShop",
  location: { lat: 40.416000, lng: -3.704513}
},
{
  name: "Aprende a leer",
  description: "Aprende a leer",
  type: "BookShop",
  location: { lat: 40.416840, lng: -3.704513}
}
];

Place.collection.drop();

Place.create(places, (err, docs) => {
  if (err) {
    throw err
  };
  places.forEach((place) => {
    console.log(place.name)
  })
  mongoose.connection.close();
});