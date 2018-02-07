const mongoose = require("mongoose");
const Place = require("../models/Place");

mongoose.connect("mongodb://localhost/books-coffee");

const places = [
  {
    name: "Starbucks",
    description:
      "Lorem fistrum te voy a borrar el cerito ese hombree la caidita apetecan. Ese hombree no te digo trigo por no llamarte Rodrigor ese hombree diodeno pecador apeteca",
    kindOfEstablishment: "coffee",
    location: { type:  "Point" , coordinates: [40.428351, -3.705071] }
  },
  {
    name: "Cafés Paco",
    description:
      "Ese pedazo de no puedor la caidita pupita hasta luego Lucas mamaar benemeritaar no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito. Mamaar apetecan mamaar quietooor no puedor caballo blanco caballo negroorl mamaar qué dise usteer llevame al sircoo. Te voy a borrar el cerito torpedo diodeno amat",
    kindOfEstablishment: "tapas",
    location: { type:  "Point" , coordinates: [40.438477, -3.665331] }
  },
  {
    name: "Librería Josiña",
    description:
      "Rodrigor te voy a borrar el cerito. Mamaar apetecan mamaar quietooor no puedor caballo blanco caballo negroorl mamaar qué dise usteer llevame a",
    kindOfEstablishment: "libreria",
    location: { type:  "Point" , coordinates: [40.41757, -3.690656] }
  },
  {
    name: "Book&Coffe",
    description:
      "Te voy a borrar el cerito torpedo diodeno amatomaa ese que llega tiene musho peligro qué dise usteer está la cosa muy malar.",
    kindOfEstablishment: "coffe-shop",
    location: { type:  "Point" , coordinates: [40.415007, -3.739905] }
  }
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


