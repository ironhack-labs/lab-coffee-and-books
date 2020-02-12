const mongoose = require("mongoose");
const Place = require("../models/Place");

let places = [
  {
      name: 'Starbucks',
      business: 'coffeeshop',
      location: { lat: 50, lng: 51 }
  },
  {
      name: 'Wise people',
      business: 'bookstore',
      location: { lat: 50, lng: 52 }
  },
  {
      name: 'Coffe & Tea',
      business: 'coffeeshop',
      location: { lat: 50, lng: 53 }
  },
  {
      name: 'Amsterdamned',
      business: 'coffeeshop',
      location: { lat: 50, lng: 54 }
  },
  {
      name: 'Readers',
      business: 'bookstore',
      location: { lat: 50, lng: 55 }
  },
  {
      name: 'Cuf Cuf',
      business: 'coffeeshop',
      location: { lat: 50, lng: 56 }
  }
]

mongoose
  .connect('mongodb://localhost/coffeeandbooks', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Place.deleteMany();
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
  .then(() => {
    return Place.insertMany(places);
  })
  .then(() =>{
    mongoose.connection.close();
    console.log("Data Base closed correctly")
  })
  .catch(err => {
    console.error(err);
  })
