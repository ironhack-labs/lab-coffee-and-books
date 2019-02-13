const Place = require("../models/Place");
const mongoose = require("mongoose");

const places = [
  {
    name: "Butcher and Sons",
    category: "Restaurant",
    stars: 5,
    address: {
      coordinates: [-99.155505, 19.425286]
    }
  },
  {
    name: "Pulqueria Insurgentes",
    category: "Bar",
    stars: 4,
    address: {
      coordinates: [-99.1670664, 19.4234263]
    }
  },
  {
    name: "Boicot cafe",
    category: "Coffee",
    stars: 4,
    address: {
      coordinates: [-99.163551, 19.418668]
    }
  }
];


mongoose.connect('mongodb://localhost/map-box-fullapp')
Place.create(places)
.then(places=>{
  console.log(`You created ${places.length} places succesfully`)
  mongoose.connect.close()
})
.catch(err=>{
  console.log(err)
})