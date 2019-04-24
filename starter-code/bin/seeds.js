require('dotenv').config()

const mongoose = require('mongoose');

const Place = require("../models/Place")

const places = [
  {
    name:"El Sótano",
    image:"images/sotano.jpg",
    category: "Bookstore",
    catSlug:"bookstore",
    rating: 90,
    location:{
      coordinates: [-99.2106434, 19.3895954]
    }
  },{
    name:"Estratto Caffé",
    image:"images/estratto.jpg",
    category: "Coffee Shop",
    catSlug:"coffee-shop",
    rating: 85,
    location:{
      coordinates: [-99.1895481, 19.3890119]
    }
  },{
    name:"Gandhi",
    image:"images/gandhi.jpg",
    category: "Bookstore",
    catSlug:"bookstore",
    rating: 80,
    location:{
      coordinates: [-99.1920591, 19.4255938]
    }
  }
]

mongoose.connect(process.env.DB)
.then(()=>{
  Place.create(places)
    .then(places => {
      console.log(`You've created ${places.length} places successfully!`)
    })
    .catch(err =>{
      console.log(err)
    })
})