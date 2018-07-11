require("dotenv").config();

const mongoose = require("mongoose");
const places = require("../models/Places");
mongoose
  .connect(
    "mongodb://localhost/lab-coffee-and-books",
    { useMongoClient: true }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

places.collection.drop();
places.create([
    {
      name: "Cafeteria Rocio",
      location: {
        type: "Point",
        coordinates: [40.407692, -3.636995]
      }
    },
    {
      name: "Mi libro",
      location: {
        type: "Point",
        coordinates: [40.408217, -3.646941]
      }
    }
  ])
  .then(() => {
    mongoose.disconnect();
  });
