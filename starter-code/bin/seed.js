const mongoose = require('mongoose')
const CoffeeShop = require('../model/place')

const dbName = 'storescoffe'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const Places = [{
    name: "Yojimbo",
    type: "Bookstore",
  location: { type: 'Point', coordinates: [40.435709, -3.715357] }
}, {
    name: "Kaleidoskop",
    type: "Coffe shop",
    location: { type: 'Point', coordinates: [40.435800, -3.715357] }
  }, {
    name: "Café Marcelo",
    type: "Coffe shop",
    location: { type: 'Point', coordinates: [40.435805, -3.715353] }
  }, {
    name: "Johnny B. Goode",
    type: "Bookstore",
    location: { type: 'Point', coordinates: [40.435800, -3.715404] }
  }, {
    name: "Ozu",
    type: "Bookstore",
    location: { type: 'Point', coordinates: [40.435830, -3.715300] }
  }, { timestamps: true }] 
  
CoffeeShop.create(Places)
  .then(allPlaces => {
    console.log(`${allPlaces.length} celebrities created on Database`)
    mongoose.connection.close()
  })
  
  
  
  // { timestamps: true })]

