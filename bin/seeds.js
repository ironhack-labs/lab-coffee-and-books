require("dotenv").config();

const mongoose = require("mongoose");
const Place = require("../models/Place");

const dbName = process.env.DBURL;
mongoose.connect(dbName);

const places = [
  {
    name: "La Ciudad Invisible",
    kindOfPlace: "Coffee shop",
    location: {
      type: {
        type: "Costanilla de los Ángeles, 7, 28013 Madrid"
      },
      coordinates: [40.419186, -3.708479]
    }
  },
  {
    name: "Cafelito",
    kindOfPlace: "Coffee shop",
    location: {
      type: {
          type: "Calle del Sombrerete, 20, 28012 Madrid"
      },
      coordinates: [40.408577, -3.702811]
    }
  },
  {
    name: "Boconó Specialty Coffee",
    kindOfPlace: "Coffee shop",
    location: {
      type: {
        type: "Calle de Embajadores, 3, 28012 Madrid"
      },
      coordinates: [40.41107, -3.706635]
    }
  },
  {
    name: "El Dinosaurio Todavía Estaba Allí",
    kindOfPlace: "Coffee shop, Bookstore",
    location: {
      type: {
        type: "Calle del Ave María, 8, 28012 Madrid"
      },
      coordinates: [40.411919, -3.700256]
    }
  },
  {
    name: "FNAC",
    kindOfPlace: "Bookstore",
    location: {
      type: {
        type: "Calle de Preciados, 28, 28013 Madrid"
      },
      coordinates: [40.419256, -3.705254]
    }
  },
  {
    name: "Libreria San Pablo",
    kindOfPlace: "Bookstore",
    location: {
      type: {
        type: "Plaza Jacint typente, 2, 28012 Madrid"
      },
      coordinates: [40.41443, -3.702977]
    }
  }
];
Place.collection.drop();

Place.create(places, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${places.length} places`);
});
