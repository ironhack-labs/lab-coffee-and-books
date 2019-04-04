const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

router.get("/", (req, res) => {
  Place.find()
  .then(places =>{
    res.render("places", {places});
  })
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  let { lng, lat, name, description } = req.body;
  let place = {
    name,
    description,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    }
  };
  Place.create(place).then(() => {
    res.redirect("/places");
  });
});

router.get('/:id/edit', (req, res) => {
  let { id } = req.params;
  Place.findById(id)
  .then(place => {
    res.render('new', {place});
  });
});

router.post('/:id/edit', (req, res) => {
  let { id } = req.params;
  Place.findByIdAndUpdate(id, {$set: {...req.body}})
  .then(place => {
    res.redirect('/places');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/:id/delete', (req, res) => {
  let { id } = req.params;
  Place.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/places');
  });
});

module.exports = router;