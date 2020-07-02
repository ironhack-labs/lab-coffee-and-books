const mongoose = require('mongoose');
const Place = require('../models/place.model');

const dbName = 'coffee-books';
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [
  {
    name: "El cafe de repaso de German",
    description: "coffee shop",
    location: { type: "Point", coordinates: [40.4354341, 3.7126132] }
  },
   {
    name: "Libreria esto no es facil en la vida",
    description: "bookstore",
    location: { type: "Point", coordinates: [40.4377507, 3.7116569] }
  },
  {
    name: "Cafe y trata de sobrevivir al bootcamp",
    description: "coffee shop",
    location: { type: "Point", coordinates: [40.4366610, 3.7121337] }
  }
]

Place.create(places, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close();
});