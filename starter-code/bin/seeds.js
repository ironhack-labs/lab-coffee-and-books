const mongoose = require('mongoose');
const Places = require('../models/Place');
const dbName = 'places';
mongoose.connect(`mongodb://localhost/${dbName}`)
const places =[
   {
    name: "Headache Coffee Shop",
    type: "coffee shop",
  },
     {
    name: "Buk Books",
    type: "bookstore",
  },
     {
    name: "Cufi Coffee Shop",
    type: "coffee shop",
  },
]
Places.deleteMany().then(() => {
  Places.insertMany(places).then(placesCreated => {
    console.log("I have finished!");
    process.exit(0);
  });
 });