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
      type: "coffee shop"
    },
    {
      name: "Coffee Time",
      type: "coffee shop"
    },
    {
      name: "My Coffee",
      type: "coffee shop"
    },
    {
      name: "Relax & Coffee",
      type: "coffee shop"
    },
    {
      name: "La cafetera",
      type: "coffee shop"
    },
    {
      name: "El librero",
      type: "bookstore"
    },
    {
      name: "De letras y folios",
      type: "bookstore"
    },
    {
      name: "Book & Book",
      type: "bookstore"
    },
    {
      name: "Shakespeare",
      type: "bookstore"
    },
    {
      name: "Cogito ergo sum",
      type: "bookstore"
    },
    
  ];
  
  Place.insertMany(places)

})

