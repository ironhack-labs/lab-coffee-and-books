const express = require("express");
const router = express.Router();
const debug = require("../log")(__filename);
const Place = require("../models/places");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find((error, places) => {
    if (error) {
      next(error);
    } else {
      res.render("index", { places: JSON.stringify(places) });
    }
  });
});
router.get("/save", (req, res, next) => {
  res.render("new");
});
router.post("/save", (req, res, next) => {
  debug(req.body);
  // Get Params from POST
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
  const newPlace = {
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    location: location
  };
  Place.create(newPlace).then(()=>{
    res.redirect("/");
  })
});

module.exports = router;