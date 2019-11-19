const express = require('express');
const router  = express.Router();
const Place   = require('../models/places');
const mongoose = require('mongoose');
const bodyParser   = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/map", (req, res, next) => {
  Place.find()
    .then(placesFound => {
      res.json(placesFound)
    })
    .catch(err => {
      console.log(err)
    })
});

router.get("/maps", (req, res, next) => {
  res.render('map')
})

router.get('/', (req, res, next) => {
  Place.find()
    .then(placesFound =>{
      res.render('index', {placesFound});
    });
});

router.get('/new', (req, res, next) => {
  res.render('create');
});

router.get('/map', (req, res, next) => {
  res.render('map');
});

router.post('/new', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.latitude, req.body.longitude]
  }
  const newPlace = new Place ({
    name: req.body.name,
    type: req.body.type,
    location: location
  });
  console.log(newPlace)
  newPlace.save()
    .then(() => {
      res.redirect('/')
    })
    .catch(() => {
      console.log('/new')
    })
});

router.get('/:id/edit', (req, res, next) => {
  Place.findById(req.params.id)
  .then(placeById => {
    res.render('edit', placeById)
  })
  .catch((err) => {
    console.log(err)
  })
});

router.post("/:id/edit", (req, res, next) => {
  const name = req.body.name;
  const type = req.body.type;
  let location = {
    type: 'Point',
    coordinates: [req.body.latitude, req.body.longitude]
  }
  
  Place.findByIdAndUpdate(req.params.id, {name, type, location})
    .then(() => {
      res.redirect(`/${req.params.id}`)
    })
    .catch(error => next(error))
})

router.get("/:id", (req, res, next) => {
  Place.findById(req.params.id)
  .then(placeById => {
    res.render('detail', placeById)
  })
  .catch(error => {
    console.log(error)
  })
})

router.get("/:id/delete", (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/')
    })
})



module.exports = router;
