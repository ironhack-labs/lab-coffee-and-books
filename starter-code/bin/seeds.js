require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));

Place.collection.drop();

Place.create([
  {
    name: "McDonald's",
    kind: "Coffee",
    location: {
      type: "Point",
      coordinates: [40.402958, -3.7277824]
    }
  },
  {
    name: "100 montaditos",
    kind: "Coffee",
    location: {
      type: "Point",
      coordinates: [40.4030782, -3.7277825]
    }
  },
    {
    name: "Fnac",
    kind: "Bookstore",
    location: {
      type: "Point",
      coordinates: [40.3963894, -3.6994578]
    }
  },
  {
    name: "Casa del Libro",
    kind: "Bookstore",
    location: {
      type: "Point",
      coordinates: [40.4241383,-3.7131772]
    }
  }
])
.then( () => {
    console.log("Places created")
    mongoose.disconnect();
});