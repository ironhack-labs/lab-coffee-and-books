const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    console.log(places);
    res.render("index", { places: JSON.stringify(places) });
  });
});

router.post("/", (req, res, next) => {
  // Get Params from POST
  let location = {
    type: "Point",
    coordinates: [req.body.latitude, req.body.longitude]
  };

  // Create a new Place with location
  const { name, description, whatplace } = req.body;
  const newPlace = new Place ({
    name,
    description,
    whatplace,
    location
  });

  // Save the place to the Database
  newPlace.save(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
