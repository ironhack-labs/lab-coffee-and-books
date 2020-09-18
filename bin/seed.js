const mongoose = require("mongoose");
const Places = require("../models/place");
const Book = require("../models/place.js");

const dbName = "places_db";
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const places = 
    {
        name: "Coma y punto",
        type: "Coffee-shop"
    }


Places.create(places)
  .then((places) =>
    console.log("Se han creado", places)
  )
  .catch((err) => console.log("ERROR: ", err));