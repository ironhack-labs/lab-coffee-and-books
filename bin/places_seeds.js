const mongoose = require("mongoose");
const Place = require("../models/Place");

const dbURL = "mongodb://localhost/dbBooksCoffee"


mongoose.connect(dbURL);

const places = [
  {
    name: "Cafe 1",
    description: "Cafeteria",
    location: { type: "Point", coordinates: [40.425351, -3.705671] }
  },
  {
    name: "Cafe 2",
    description: "Cafetería",
    location: { type: "Point", coordinates: [40.428451, -3.705171] }
  },
  {
    name: "Cafe 3",
    description: "Cafetería",
    location: { type: "Point", coordinates: [40.428551, -3.705271] }
  }
];

Place.create(places, (err, place) => {
 if (err) {
     console.log(err)
   throw err;
 }
 console.log("Place Created")
 mongoose.connection.close();
});