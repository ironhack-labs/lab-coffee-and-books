require('dotenv').config();

const mongoose = require('mongoose');
const Places = require('../models/places');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Places.collection.drop();

Places.create([
    {
        name: "Vait Clara del Rey",
        description:"Coffe shop in Prosperidad",
        class: "Coffe",
        location:{
            type: "Point",
            coordinates:[40.4443802,-3.6813494]
        }
    },
    {
        name: "Starbucks",
        description:"Starbucks Calle Velasquez",
        class: "Coffe",
        location:{
            type: "Point",
            coordinates:[40.4532066,-3.6831282]
        }
    },
    {
      name: "TuuuLibrería",
      description:"Libros chungos",
      class: "Books",
      location:{
          type: "Point",
          coordinates:[40.4532029,-3.6832303]
      }
  },
  {
    name: "Tik Books",
    description:"Libros usados",
    class: "Books",
    location:{
        type: "Point",
        coordinates:[40.4474603,-3.7072443]
    }
}
])
.then( () => {
    console.log("Places created")
    mongoose.disconnect();
});