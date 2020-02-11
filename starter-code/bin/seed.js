const mongoose = require('mongoose');
const Place = require('../models/place.model');

const dbName = 'coffes-books-places';
mongoose.connect(`mongodb://localhost/${dbName}`)



const places = [
    {
      name : "Hola Coffe",
      type: "coffee shop"
    },
    {
      name : "Gatoteca",
      type: "coffee shop"

    },
    {
      name : "La Central",
      type: "bookstore"
    }
  ]


  Place.create(places, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${places.length} places`)
    mongoose.connection.close()
  })