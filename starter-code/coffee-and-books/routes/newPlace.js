"use strict";
const express = require("express");
const router = express.Router();
const Place = require("../models/places");
// var GeoJSON = require("mongoose-geojson-schema");

router.get("/", function(req, res, next) {
  res.render("new");
});

router.post("/new", (req, res, next) => {
  console.log(req.body);
  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const placeInfo = {
    name: req.body.name,
    type: req.body.type,
    location: location
  };

  const newPlace = new Place(placeInfo);

  newPlace.save(err => {
    if (err) {
      console.log("error", err);
      next(err);
    } else {
      res.redirect("new");
    }
  });
});

module.exports = router;
