const mongoose = require('mongoose');
const Place = require('../models/place');

const places = [
  {
    name: "Bar1",
    position:[
    lat= 41.390211,
    lng= 2.154111],
    type: "coffee shop",
       
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  },
  {
    name: "Bar2",
    position:[
    lat= 41.390205,
    lng= 2.154007],
    type: "coffee shop",
       
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  },
  {
    name: "BookStore1",
    position:[
    lat= 41.390320,
    lng= 2.155555],
    type: "bookstore",
       
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
  
]


mongoose
  .connect('mongodb://localhost/coffeeAndBooks', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Place.insertMany(places)
    .then ((data) =>{
      console.log(data)
      mongoose.disconnect()
    }).catch((err) =>{
      console.log(err)
    } )
  }) 
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });