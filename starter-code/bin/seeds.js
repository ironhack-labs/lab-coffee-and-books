const mongoose = require ('mongoose')
const Place = require ('../models/Place')
const express = require("express")

const places = [
  {
    name: "El pendulo",
    image: 'http://robotania.com/wp-content/uploads/2015/06/Cafebreria-el-pendulo-robotania-2.jpg',
    category: 'Coffee',
    stars: 4,
    location:{
      coordinates:[-99.1710726, 19.4261521]
    }
  },{
    name: "El Sotano",
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/06/0a/a7/35/taberna-el-sotano.jpg',
    category: 'Coffee',
    stars: 5,
    location:{
      coordinates:[-99.1711585, 19.4262313]
    }
  },{
    name: "Peltre",
    image: 'https://bullandtank.com/assets/img/restaurants/peltre/place/foto-local-3.jpg',
    category: 'Restaurant',
    stars: 5,
    location:{
      coordinates:[-99.1709868, 19.4260728]
  }
  }
]

mongoose.connect('mongodb://localhost/lab-coffee-and-books')
.then(()=>{
  Place.create(places)
.then(places => {
  console.log(`You created ${places.length} places succesfully`)
  mongoose.connection.close()
})
.catch(err =>{
  console.log(err)
})
})
.catch(err =>{
  console.log(err)
})

