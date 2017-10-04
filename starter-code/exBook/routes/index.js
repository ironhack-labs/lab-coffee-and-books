const express = require("express");
const router = express.Router();
const Place = require("../models/place");

router.get("/", (req, res, next) => {
  Place.find((error, place) => {
    if (error) {
      next(error);
    } else {
      res.render("place/index", { place });
    }
  });
});

router.get('/new', (req, res, next) => {
  res.render('place/new')
})

router.post('/new', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }
  
  const newPlace = new Place({
    name: req.body.name,
    description: req.body.description,
    location: location
  });
  
  newPlace.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/')
    }
  })
})

router.get('/show/:id', (req, res, next) => {
  let id = req.params.id
  Place.findById({})
  res.render("place/show")
}) 
module.exports = router;