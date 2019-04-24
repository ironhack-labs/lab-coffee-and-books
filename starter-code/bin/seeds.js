const mongoose = require("mongoose")
const Place = require("../models/Place")

const places =[
  {
    name: "Starbucks",
    image: "https://www.macewaneats.ca/images/vendors/logos/170814113423-starbucks.png",
    category: "coffee shop",
    location:{
      coordinates: [-99.1634286, 19.4301113]
    }
  },
  {
    name: "Cielito Lindo Cafe",
    image: "https://media.licdn.com/dms/image/C4E0BAQGmT7hvub4rZw/company-logo_200_200/0?e=2159024400&v=beta&t=RPYZE4wo7NfdOzmY-XJ2SwyhJ2hY2FXA_pHYLXR-X1o",
    category: "coffee shop",
    location:{
      coordinates: [-99.1670987, 19.4176674]
    }
  },
  {
    name: "Tierra Garat",
    image: "http://pbs.twimg.com/profile_images/759954672551534592/tyhKtbz0_200x200.jpg",
    category: "coffee shop",
    location:{
      coordinates: [-99.1678435, 19.4202671]
    }
  },
  {
    name: "Cafebrería El Pendulo",
    image: "https://media.licdn.com/dms/image/C4E03AQG5AUOuNWGF7Q/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=BzjMpACEMYV-FolzSlSRl0pH-C3bwpb19e7EReUt_4s",
    category: "bookstore",
    location:{
      coordinates: [-99.1678435, 19.4202671]
    }
  }
]
//Las coordenadas están colocadas al revés de cómo las otorga Google, así las interpreta Mongo DB
mongoose.connect("mongodb://localhost/mamadores")
.then(()=>{
  Place.create(places)
  .then(places =>{
    console.log("You've created ${places.length} places succesfully")
    mongoose.connection.close()
  })
  .catch(err =>{
    console.log(err)
  })
})
.catch((err)=>{
  console.log(err)
})

