const express = require('express');
const placeRouter = express.Router();

const Places = require("../models/Places")

/* GET home page */
placeRouter.get('/', (req, res, next) => {
  Places.find()
    .then((places) => {
      res.render("places", { places })
    })
    .catch((err) => {
      next(err);
    })
});
placeRouter.get("/:id", (req, res, next) => {
  Places.findById(req.params.id)
    .then((places) => {
      // console.log(places)
      res.render("show", { places })
    })
    .catch((err) =>
      next(err))
})

placeRouter.get('/new', (req, res) => {
  res.render("create")
});

placeRouter.post('/new', (req, res) => {
  const newPlace = ({
    name: req.body.name,
    type: req.body.type,
    location: {
      lat: parseFloat(req.body.lat),
      lng: parseFloat(req.body.lng),
    },
  });
  Place.create(newPlace)
    .then(() => res.redirect('/places'))
    .catch(() => {
      // console.log(e)
      console.log("hola")
      res.redirect("/places/new")
    })
});

placeRouter.get("/:id/edit", (req, res) => {
  Places.findById(req.params.id)
    .then((place) => {
      res.render("edit", { place })
    })
    .catch((err) => {
      console.log(err)
    })
})

placeRouter.post("/:id/edit", (req, res, next) => {
  Places.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    type: req.body.type,
    location: {
      lat: parseFloat(req.body.lat),
      lng: parseFloat(req.body.lng),
    },
  })
    .then(() => {
      res.redirect("/places")
    })
    .catch((err) => {
      res.redirect("/")
      next(err)
    })
})

placeRouter.post('/:id/delete', (req, res, next) => {
  Places.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/places'))
    .catch(err => next(err));
});

module.exports = placeRouter;