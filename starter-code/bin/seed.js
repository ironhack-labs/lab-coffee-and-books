const mongoose = require('mongose');
const Place = require('../models/Place');

const places = []

require('../configs/db.config');

const placesToSave = places.map
(place => ({ 
  name: place.name,
  type: place.type,
  location: {
    type: 'Point',
    coordinates: [restaurant.latlng.lng,
    restaurant.latlng.lat]
  }
}))

Place.create(placesToSave)
.then(() => mongoose.disconnect());