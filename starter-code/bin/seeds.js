let Place =require("../models/Place")
let mongoose = require("mongoose")

let places=[
  {
    name:"Butchers & Sons",
    category:"restaurant",
    stars:5,
    address:{
      coordinates:[-99.160266,19.419722]
    }
  },
  {
    name:"Pulqueria Insurgentes",
    category:"bar",
    stars:5,
    address:{
      coordinates:[-99.164005,19.419373]
    }
  },
  {
    name:"Boicot Cafe",
    category:"coffee",
    stars:4,
    address:{
      coordinates:[-99.158936,19.419236]
    }
  }

]


mongoose.connect('mongodb://localhost/carlos')
Place.create(places)
.then(places=>{
  console.log(`creaste ${places} lugares`)
  mongoose.connection.close()
})
.catch(e=>console.log(e))