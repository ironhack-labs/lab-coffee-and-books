require("dotenv").config();

const mongoose = require("mongoose");
const Places = require("../models/Place");

const dburl = process.env.DBURL;
mongoose
  .connect(
    'mongodb://localhost/coffeeBooks',
    { useMongoClient: true }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Places.collection.drop();

Places.create([
  {
    name: "Desperate Literature",
    description: "Nice books",
    kindOfPlace: "Book store",
    location: {
      type: "Point",
      coordinates: [40.4195049,-3.7114494]
    }
  },
  {
    name: "San Gines library",
    description: "Nice books",
    kindOfPlace: "Book store",
    location: {
      type: "Point",
      coordinates: [40.4171277,-3.7088907]
    }
  },
  {
    name: "Dunkin",
    description: "Have some donuts",
    kindOfPlace: "Coffee place",
    location: {
      type: "Point",
      coordinates: [40.4166287,-3.7017059]
    }
  },
  {
    name: "Starbucks",
    description: "Have some coffee",
    kindOfPlace: "Coffee place",
    location: {
      type: "Point",
      coordinates: [40.4200226,-3.7054771]
    }
  }
]).then(() => {
  console.log("Places created");
  mongoose.disconnect();
});
