const mongoose = require("mongoose");
const Places = require("../models/Place");

const dbPlaces = "Places";
mongoose.connect(`mongodb://localhost/${dbPlaces}`);

const places = [
  {
    name: "Coffee Madrid",
    type: "coffee shop"
  }
];


Places.create(places, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${roles.length} places`);
  mongoose.connection.close();
});
 