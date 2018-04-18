const mongoose = require("mongoose");
const Place = require("../models/Place");

const dbName = "coffee-and-books";
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [
  {
    name : "Bookstore 1",
    type: "bookstore",
    description : "Where drama is",
    location: {
      type: "Point",
      coordinates: [2.213213, 42.123423]
    }
  },
  {
    name : "Coffeestore 1",
    type: "coffeestore",
    description : "Roasted goodies",
    location: {
      type: "Point",
      coordinates: [2.123321, 42.231234]
    }
  },
]

Place.create(places, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${places.length} places`);
  mongoose.connection.close();
});

