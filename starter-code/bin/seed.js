const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/coffeebook");

const User = require("../models/user.model");
const Place = require("../models/place.model");

const places = [
  {
    name: "Coffee Sunu",
    type: "coffee shop",
    location: {
      type: "pointnorte",
      coordinates: [41.38623, 2.17498],
    },
  },
  {
    name: "Coffee Paola",
    type: "coffee shop",
    location: {
      type: "pointsur",
      coordinates: [41.38623, 2.17498],
    },
  },

  {
    name: "Coffee Venezuela",
    type: "coffee shop",
    location: {
      type: "pointeste",
      coordinates: [41.38623, 2.17498],
    },
  },
];

Place.create(places)
  .then((allPlaces) => {
    console.log(`Se han creado coffee${allPlaces.length}`);
    mongoose.connection.close();
  })
  .catch((err) => {
    next(err);
  });
