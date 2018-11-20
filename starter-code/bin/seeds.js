const mongoose = require('mongoose');
const Place = require('../models/Place');
require('dotenv').config();


mongoose.connect(process.env.DBNAME);

const places = [{
  name: "place1",
  type: `coffee shop`
},
{
  name: "place2",
  type: `coffee shop`
},
{
  name: "place3",
  type: `bookstore`
},
{
  name: "place4",
  type: `bookstore`
},
{
  name: "place5",
  type: `coffee shop`
}]

Place.create(places, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${places.length} places`)
  mongoose.connection.close()
});

