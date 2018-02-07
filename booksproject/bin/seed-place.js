const mongoose = require("mongoose");
const { dbUrl } = require("../config");
const Place = require("../models/Place");

mongoose.connect(dbUrl).then(() => console.log("db running"));

const places = [
  new Place({
    name: "Kapital",
    description: "muy rica, muy buen precio",
    kindOfEstablishment: "Coffee",
    location: { type: "Point", coordinates: [40.409727, -3.693196] }
  }),
  new Place({
    name: "Starbucks La Moraleja",
    description: "highly overpriced pero me mola",
    kindOfEstablishment: "Coffee",
    location: { type: "Point", coordinates: [40.530046, -3.638462] }
  }),
  new Place({
    name: "Casa del Libro",
    description: "un buen sitio para comer",
    kindOfEstablishment: "bookstore",
    location: { type: "Point", coordinates: [40.419923, -3.703266] }
  })
];

//vacía la collection
Place.collection.drop();

//recorre el array de users y crea objetos
Place.create(places, (err, place) => {
  console.log("creating places...");
  if (err) {
    console.log(`place could not be saved`);
    throw err;
  }
  place.forEach(p => {
    console.log(`place added ${p.name}`);
  });
  //cierra la conexion
  mongoose.connection.close();
});
