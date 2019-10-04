//! Maps Key: AIzaSyAw_K2RJd5LMwCk7CP1iDV_kmesUePv6rc

const express = require("express");
const router = express.Router();
const placeModel = require("../models/places");

//* Route to get all places
router.get("/", (req, res, next) => {
  placeModel
    .find()
    .then(places => res.json(places))
    .catch(err => next(err));
});

//* Route to create one place
router.post("/", (req, res, next) => {
  const { name, type, lat, long } = req.body;
  const newPlace = new placeModel({ name, type, location: { type: "Point", coordinates: [long, lat] } });
  newPlace
    .save()
    .then(result => res.json(result))
    .catch(err => next(err));
});

//* Render form to create
router.get("/new", (req, res, next) => {
  res.render("places/new");
});

//* Render view map
router.get("/show", (req, res, next) => {
  res.render("places/show");
});

//* Route to edit one place
router.put("/:id", (req, res, next) => {
  const { name, type, lat, long } = req.body;
  placeModel
    .findByIdAndUpdate(req.params.id, { name, type, location: { type: "Point", coordinates: [long, lat] } })
    .then(result => res.json(result))
    .catch(err => next(err));
});

//* Route to delete one place
router.delete("/:id", (req, res, next) => {
  placeModel
    .findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;
