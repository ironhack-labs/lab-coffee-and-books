require("dotenv").config();

const mongoose = require("mongoose");
const Place = require("../models/Place");

const dbName = process.env.DBURL;
mongoose.connect('mongodb://localhost/lab-coffee-and-books');

const places = [
  {
    name: "La Ciudad Invisible",
    kindOfPlace: "Coffee shop",
    location: {
      type: "Point",
      coordinates: [40.419186, -3.708479]
    }
  },
  {
    name: "Cafelito",
    kindOfPlace: "Coffee shop",
    location: {
      location: {
        type: "Point",
        coordinates: [40.408577, -3.702811]
      }
    }
  },
  {
    name: "Boconó Specialty Coffee",
    kindOfPlace: "Coffee shop",
    location: {
      type: "Point",
      coordinates: [40.41107, -3.706635]
    }
  },
  {
    name: "El Dinosaurio Todavía Estaba Allí",
    kindOfPlace: "Coffee shop, Bookstore",
    location: {
      type: "Point",
      coordinates: [40.411919, -3.700256]
    }
  },
  {
    name: "FNAC",
    kindOfPlace: "Bookstore",
    location: {
      type: "Point",
      coordinates: [40.419256, -3.705254]
    }
  },
  {
    name: "Libreria San Pablo",
    kindOfPlace: "Bookstore",
    location: {
      type: "Point",
      coordinates: [40.41443, -3.702977]
    }
  }
];
//Place.collection.drop();

Place.create(places, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${places.length} places`);
});

//mongoose.disconnect();
