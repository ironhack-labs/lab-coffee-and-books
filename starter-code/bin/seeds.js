require('dotenv').load();
const mongoose = require('mongoose');
const Place = require('../models/Place');

mongoose.connect(process.env.DBURL, {useNewUrlParser: true}).then(()=> {
  console.log("Connected!");
})

Place.collection.drop();
Place.create([
  {name:"Starbuks", type:"coffee shop",location:{type:"Point",coordinates:[40.384089,-3.7233037]}},
  {name:"La casa del libro", type:"bookstore",location:{type:"Point",coordinates:[40.3843083,-3.7233038]}},
  {name:"Nero Cafe", type:"coffee shop",location:{type:"Point",coordinates:[40.3200477,-3.7900433]}},
  {name:"Fnac", type:"bookstore",location:{type:"Point",coordinates:[40.4008443,-3.6922839]}},
]).then(()=> console.log("CREATED!"))
