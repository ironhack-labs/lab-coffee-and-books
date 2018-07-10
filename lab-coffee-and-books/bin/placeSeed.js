require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/place');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();

Place.create([
    {
        name: "Casa del Libro",
        description:"books books",
        kindOfPlace:"bookstore",
        location:{
            type: "Point",
            coordinates:[40.4244242,-3.6783751]
        }
    },
    {
        name: "Libreria los Editores",
        description:"books books",
        kindOfPlace:"bookstore",
        location:{
            type: "Point",
            coordinates:[40.4231555,-3.6870985]
        }
    },
    {
      name: "Cafetería Galatea",
      description:"coffees coffees",
      kindOfPlace:"coffeplace",
      location:{
          type: "Point",
          coordinates:[40.4233371,-3.6822867]
      }
    },
    {
      name: "Cafetería Mariuca",
      description:"coffees coffees",
      kindOfPlace:"coffeplace",
      location:{
          type: "Point",
          coordinates:[40.419392,-3.6756195]
      }
    }
])
.then( () => {
    console.log("Places created")
    mongoose.disconnect();
});