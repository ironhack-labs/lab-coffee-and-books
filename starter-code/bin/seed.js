const mongoose = require("mongoose")
const Place = require("../models/place")

const dbName = "cofee-books"
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const places = [{
    name: "Museo del Jamon",
    type: "cofee shop",
    location: {
      type: "point",
      coordinates: [40.387071, -3.698199]
    }
  },
  {
    name: "Fnac Plaza Rio2",
    type: "bookstore",
    location: {
      type: "point",
      coordinates: [40.391074, -3.701793]
    }
  },
  {
    name: "Kebab",
    type: "cofee shop",
    location: {
      type: "point",
      coordinates: [40.388616, -3.699560]
    }
  }
]

Place.create(places)
  .then((allPlaces) => {
    console.log(`${allPlaces.length} sitios creados`)
    mongoose.connection.close()
  })
  .catch((err) => console.log(`An error ocurred: ${err}`))