require("dotenv").config();
const mongoose = require("mongoose");
const Place = require("../models/place");

const place = [
  {
    name: "Café Gijón",
    type: "coffee_shop"
  },
  {
    name: "Starbucks",
    type: "coffee_shop"
  },
  {
    name: "Casa del comic",
    type: "bookstore"
  }
];
mongoose
  .connect("mongodb://localhost/places", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    Place.deleteMany()
      .then(() => {
        return Place.create(place);
      })
      .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
