const mongoose = require("mongoose");
const Place = require("../models/place");

mongoose.connect(`mongodb://localhost/Coffee&Books`);

const places = [
  {
    name: "Cafetería Snack Los Arcos del Mercado-Rachid",
    type: "Coffee shop",
    location: { type:  "Point", coordinates: [-3.696904,40.395476] }
  },
  {
    name: "JM Papeleria Libreria",
    type: "Bookstore",
    location: { type:  "Point", coordinates: [-3.693776,40.39158] }
  },
  
];

Place.create(places, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${places.length} place(s)`);
  mongoose.connection.close();
});