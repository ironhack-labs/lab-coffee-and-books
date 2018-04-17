const mongoose = require("mongoose");
const Place = require("../models/Place");

const dbURL = "mongodb://localhost/lab-coffee-and-books"


mongoose.connect(dbURL);

const places = [
  {
    name: "Paco Coffee",
    description: "Cafetería",
    location: { type: "Point", coordinates: [40.428351, -3.705071] }
  },
  {
    name: "Juan Coffee",
    description: "Cafetería",
    location: { type: "Point", coordinates: [40.428451, -3.705171] }
  },
  {
    name: "Luis Coffee",
    description: "Cafetería",
    location: { type: "Point", coordinates: [40.428551, -3.705271] }
  }
];

// Place.collection.drop(() => {
//   console.log("Dropped Collection")
//   mongoose.connection.close()}
// );

Place.create(places, (err, place) => {
 if (err) {
     console.log(err)
   throw err;
 }
 console.log("Place Created")
 mongoose.connection.close();
});