const mongoose = require("mongoose");
const Place = require("../models/place");

mongoose.connect("mongodb://localhost:27017/coffe&rest");

const places = [
  {
    name: "Monguer Donguer",
    description:
      "academico y frugal",
    kindOfEstablishment: "cofee",
    location: { type:  "Point" , coordinates: [40.429274, -3.605275] }
  },
  {
    name: "Piticler",
    description:
      "un poco piticler",
    kindOfEstablishment: "cofee",
    location: { type:  "Point" , coordinates: [40.443719, -3.716350] }
  },
  {
    name: "Librería el Ojal",
    description:
      "hay libros",
    kindOfEstablishment: "bookstore",
    location: { type:  "Point" , coordinates: [40.444660, -3.720303] }
  },
  
 
];

Place.collection.drop();

Place.create(places, (err, place) => {
  if (err) {
      console.log(err)
    throw err;
  }
  console.log(place);
  mongoose.connection.close();
});

