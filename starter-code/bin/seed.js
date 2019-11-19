const mongoose = require("mongoose");
const Place = require("../models/places");

mongoose
  .connect("mongodb://localhost/places", { useNewUrlParser: true })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));

Place.deleteMany()
.then(()=>{
  const places = [
    {
      name: "Il café di Maria",
      type: "coffee shop",
      pos:{ 
        lat: 40.416900, 
        lng: -3.703400}
    },
    {
      name: "Coffee Time",
      type: "coffee shop",
      pos:{ 
        lat: 40.416500, 
        lng: -3.703492}
    },
    {
      name: "My Coffee",
      type: "coffee shop",
      pos:{ 
        lat: 40.416928, 
        lng: -3.703492}
    },
    {
      name: "Relax & Coffee",
      type: "coffee shop",
      pos:{ 
        lat: 40.416930, 
        lng: -3.703600}
    },
    {
      name: "La cafetera",
      type: "coffee shop",
      pos:{ 
        lat: 40.416900, 
        lng: -3.702000}
    },
    {
      name: "El librero",
      type: "bookstore",
      pos:{ 
        lat: 40.416910, 
        lng: -3.704000}
    },
    {
      name: "De letras y folios",
      type: "bookstore",
      pos:{ 
        lat: 40.416092, 
        lng: -3.702432}
    },
    {
      name: "Book & Book",
      type: "bookstore",
      pos:{ 
        lat: 40.416940, 
        lng: -3.710000}
    },
    {
      name: "Shakespeare",
      type: "bookstore",
      pos:{ 
        lat: 40.416875, 
        lng: -3.702500}
    },
    {
      name: "Cogito ergo sum",
      type: "bookstore",
      pos:{ 
        lat: 40.416900, 
        lng: -3.710000}
    },
    
  ];
  
  Place.insertMany(places)

})

