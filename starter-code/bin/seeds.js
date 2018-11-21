const mongoose = require('mongoose');
const Place = require('../models/Place');
require('dotenv').config();


mongoose.connect(process.env.DBNAME);

const places = [{
  name: "place1",
  type: `coffee shop`,
  location:{
    lat: 34,
    long: -12
  }
},
{
  name: "place2",
  type: `coffee shop`,
  location:{
    lat: 98,
    long:45
  }
},
{
  name: "place3",
  type: `bookstore`,
  location:{
    lat: -56,
    long: 78
  }
},
{
  name: "place4",
  type: `bookstore`,
  location:{
    lat: 32,
    long:11
  }
},
{
  name: "place5",
  type: `coffee shop`,
  location:{
    lat: 34,
    long:55
  }
}]

Place.collection.drop();
console.log(places[0].location.lat);
Place.create(places, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close()
});

