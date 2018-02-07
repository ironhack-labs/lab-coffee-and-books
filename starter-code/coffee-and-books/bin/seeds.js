const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/placesDB");

const Place = require("../models/place");

const places = [
  {
    name: "Home",
    description: "My home"
  }
];

Place.create(places, (err, savedPlaces) => {
  if (err) {
    throw err;
  }
  savedPlaces.forEach(thePlace => {
    console.log(`${thePlace.name} - ${thePlace.description}`);
  });
  mongoose.disconnect();
});
