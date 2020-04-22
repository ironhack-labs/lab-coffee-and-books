const mongoose = require("mongoose")
const Place = require("../models/place.model")

const dbName = 'coffe&books'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const places= [
  {
    name: "Bar el Mangürrian",
    type: "Coffee Shop",
    location: { coordinates: ["41.3977381", "2.190471916"] }
  },
  {
    name: "Bar Cirilo",
    type: "Bookstore",
    location: { coordinates: ["41.2345775", "4.389241563"] }
  },
  {
    name: "Columbia",
    type: "Bookstore",
    location: { coordinates: ["31.3977381", "2.847362891"] }
  },
  {
    name: "Cara Pan",
    type: "Coffee Shop",
    location: { coordinates: ["52.3977381", "3.190471916"] }
  }
  
]


Place.create(places)
    .then(allPlaces => {
      console.log(`------------------------------------------------------------------------${allPlaces.length} places created`)
      mongoose.connection.close()
    })
    .catch(err => console.log(`------------------------------An error occurred while creating the place: ${err}`))