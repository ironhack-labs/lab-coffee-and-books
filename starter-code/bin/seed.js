require("dotenv").config()
const mongoose = require("mongoose")
const Place = require('../models/place.model')

const dbName = `${process.env.DATABASE}`
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const places = [
  {
    name: "Tita Rivera",
    type: "coffee shop",
    location: {
      type: "Point",
      coordinates: [40.422620, -3.699789]
    }
  },
  {
    name: "Books & Wine",
    type: "bookstore",
    location: {
      type: "Point",
      coordinates: [40.424809, -3.700819]
    }
  },
  {
    name: "Starbucks",
    type: "coffee shop",
    location: {
      type: "Point",
      coordinates: [40.428370, -3.701034]
    }
  },
  {
    name: "La Casa del Libro",
    type: "coffee shop",
    location: {
      type: "Point",
      coordinates: [40.425189, -3.679127]
    }
  }
]

Place.create(places)
  .then(allPlaces => {
    console.log(allPlaces.length, " places have been created!")
    mongoose.connection.close()
  })
  .catch(error => console.log("An error has occured: ", error))