const mongoose = require('mongoose');
const Place = require('../models/place');
const dbName = "starter-code";
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [
  {
    name: "Café Marokita",
    type: "coffe shop",
    latitude: -23.548875, 
    longitude: -46.642729
	},
	{
    name: "Fran's Café",
    type: "coffe shop",
    latitude: -23.560046, 
    longitude: -46.638436
	},
	{
    name: "Casa de Chá Egípicia",
    type: "coffe shop",
    latitude: -23.577747, 
    longitude: -46.635601
  },
  {
    name: "Urbe Café Bar",
    type: "coffe shop",
    latitude: -23.554146, 
    longitude: -46.658349
  },
  {
    name: "Livraria da Vila",
    type: "bookstore",
    latitude: -23.561619, 
    longitude: -46.664184
  },
  {
    name: "Livraria Martins Fontes",
    type: "bookstore",
    latitude: -23.566653, 
    longitude: -46.648305
  },
  {
    name: "Livraria Aliança Sebo Cafeteira",
    type: "bookstore",
    latitude: -23.562831, 
    longitude: -46.620633
  },
];

Place.create(places, (err) => {
	if (err) {throw(err) }
	console.log(`Created ${places.length} book stores/caffees!`);
	mongoose.connection.close();
})