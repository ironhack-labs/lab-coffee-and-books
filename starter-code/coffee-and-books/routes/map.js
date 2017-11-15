"use strict";
const express = require("express");
const router = express.Router();
const Place = require("../models/places").Place;
var GeoJSON = require("mongoose-geojson-schema");

router.get("/", function(req, res, next) {
  res.render("map");
});

module.exports = router;
