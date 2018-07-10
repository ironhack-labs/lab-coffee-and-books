const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places: JSON.stringify(places) });
  });
});

router.post("/",(req, res, next) => {
  // Get Params from POST
  let location = {
    type: "Point",
    coordinates: [req.body.lat, req.body.lng]
  };

  // Create a new Restaurant with location
  const newPlace = new Place({
    name: req.body.name,
    description: req.body.description,
    kind: req.body.kind,
    location: location
  });

  // Save the restaurant to the Database
  newPlace.save(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
