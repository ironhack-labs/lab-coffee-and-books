require('dotenv').load();
const mongoose = require('mongoose');
const Place = require('../models/Place');

mongoose.connect(process.env.DBURL, {useNewUrlParser: true}).then(()=> {
  console.log("Connected!");
})

Place.collection.drop();
Place.create([
  {name:"Starbuks", type:"coffee shop"},
  {name:"La casa del libro", type:"bookstore"},
  {name:"Nero Cafe", type:"coffee shop"},
  {name:"Fnac", type:"bookstore"},
]).then(()=> console.log("CREATED!"))
