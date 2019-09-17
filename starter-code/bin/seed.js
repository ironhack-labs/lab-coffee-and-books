const mongoose = require("mongoose");
const Place = require("../models/Place");

const placesContent = require('../contents/places.json');
require('../configs/db.config');

const placesToSave = placesContent.map(place => ({ name: place.name, type: place.cuisine_type, location: { type: 'Point', coordinates: [place.latlng.lng, place.latlng.lat] } }));

Place.create(placesToSave)
  .then(() => mongoose.disconnect());
