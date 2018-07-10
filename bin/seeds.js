require("dotenv").config();

const mongoose = require("mongoose");
const Place = require("../models/Place");
const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));

Place.collection.drop();

Place.create([
  {
    name: "Generación X",
    description: "Comic Store",
    location: {
      type: "Point",
      coordinates: [40.4287716,-3.7465675]
    }
  },
  {
    name: "Mundo Fantasía",
    description: "Comic Store",
    location: {
      type: "Point",
      coordinates: [40.4228322,-3.7101023]
    }
  },
  {
    name: "El Palentino",
    description: "Freak Cafe",
    location: {
      type: "Point",
      coordinates: [40.4098449,-3.7228637]
    }
  },
  {
    name: "El Tigre",
    description: "Freak Cafe",
    location: {
      type: "Point",
      coordinates: [40.4203482,-3.7000349]
    }
  }
]).then(() => {
  console.log("Places created");
  mongoose.disconnect();
});
