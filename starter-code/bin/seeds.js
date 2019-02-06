const mongoose = require('mongoose');
const Place = require('../models/place');

const dbName = 'coffeShops';
mongoose.connect(`mongodb://localhost/${dbName}`);

const coffeShops = [
  {name: "El Panda",
type: "coffee shop",
location: { lat: 40.466775, lng: -3.71379 }},
{
  timestamps: true
}

]

Place.create(coffeShops, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${coffeShops.length} coffeShops`)
  mongoose.connection.close();
});
