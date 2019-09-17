const express = require("express");
const Place = require("../models/Place");
const router = express.Router();

router.get("/places", (req, res, next) => {
  Place.find().then(allPlaces => {
    console.log(allPlaces);
    res.json(allPlaces);
  });
});

router.get("/new", (req, res, next) => {
  res.render("addPlace");
});

router.post("/new", (req, res, next) => {
  const { name, type, lat, lng } = req.body;

  const place = new Place({
    name,
    type,
    location: {
      coordinates: [lng, lat],
      type: "Point"
    }
  });

  place
    .save()
    .then(ok => {
      console.log("Restaurant created");
      res.redirect("/");
    })
    .catch(error => next(error));
});

module.exports = router;
