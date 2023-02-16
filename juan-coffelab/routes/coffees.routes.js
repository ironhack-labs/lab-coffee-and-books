const express = require('express');
const router = express.Router();
const Place = require('../models/Place.model')
require("../db")

router.get("/", (req, res, next) => {
  Place
    .find()
    .then(coffees => res.render("coffees/coffees-list", { coffees }))
    .catch(err => next(err))
});

router.get("/create", (req, res, next) => {
  res.render("coffees/coffees-create");
});
router.post("/create", (req, res, next) => {
  const { name, type, lon, lat } = req.body
  const placeObject = {
    name, type, location: {
      type: 'Point',
      coordinates: [lat, lon]
    }
  }
  Place
    .create(placeObject)
    .then(() => res.redirect("/coffees"))
    .catch(err => next(err))
});
router.get("/map", (req, res, next) => {
  Place
    .find()
    .then(coffees => res.render("coffees/coffees-map", { coffees }))
    .catch(err => next(err))
});
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Place
    .findById(id)
    .then(coffee => res.render("coffees/coffees-details", coffee))
    .catch(err => next(err))
})
router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params
  Place
    .findById(id)
    .then(coffee => {
      const [lat, lon] = coffee.location.coordinates
      res.render("coffees/coffees-edit", { coffee, lat, lon })
    })
    .catch(err => next(err))
})
router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, type, lon, lat } = req.body
  const placeObject = {
    name, type, location: {
      type: 'Point',
      coordinates: [lat, lon]
    }
  }
  Place
    .findByIdAndUpdate(id, placeObject)
    .then(() => res.redirect(`/coffees/${id}`))
    .catch(err => next(err))
})
router.post("/:id/delete", (req, res, next) => {
  const { id } = req.params
  Place
    .findByIdAndDelete(id)
    .then(() => res.redirect("/coffees"))
    .catch(err => next(err))
})

module.exports = router;

