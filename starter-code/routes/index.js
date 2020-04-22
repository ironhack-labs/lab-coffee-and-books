const express = require('express');
const router = express.Router();
const Place = require("../models/place")

router.get("/", (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('index', {
      allPlaces
    }))
    .catch(err => console.log("An error ocurred", err))
})

router.get("/details/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(selectedPlace => res.render("details", {
      selectedPlace
    }))
    .catch(err => console.log("An error ocurred", err))
})

router.get('/create', (req, res, next) => res.render('create'))
router.post('/create', (req, res, next) => {
  let location = {
    type: "point",
    coordinates: [req.body.longitude, req.body.latitude]
  }
  Place.create({
      name: req.body.name,
      type: req.body.type,
      location
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log("An error ocurred", err))
})
router.post('/details/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/"))
    .catch(err => res.send("An error ocurred", err))
})
router.get("/details/:id/edit", (req, res, next) => {
  Place.findById(req.params.id)
    .then(editPlace => res.render("edit",
      editPlace
    ))
    .catch(err => console.log("An error ocurred", err))
})
router.post('/details/:id/edit', (req, res, next) => {
  let location = {
    type: "point",
    coordinates: [req.body.longitude, req.body.latitude]
  }
  Place.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      type: req.body.type,
      location
    }, {
      new: true
    })
    .then(res.redirect("/"))
    .catch(err => console.log("An error ocurred", err))
})

router.get("/api", (req, res, next) => {
  Place.find()
    .then(places => {
      res.json(places);
    })
    .catch(error => console.log(error));
});
module.exports = router;