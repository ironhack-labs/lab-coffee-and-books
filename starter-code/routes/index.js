const express = require('express');
const router  = express.Router();
const Place   = require('../models/places');
const mongoose = require('mongoose');
const bodyParser   = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
  Place.find()
    .then(placesFound =>{
      res.render('index', {placesFound});
    });
});

router.get('/new', (req, res, next) => {
  res.render('create');
});

router.post('/new', (req, res, next) => {
  const {name, type} = req.body;
  const newPlace = new Place({name, type});
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
  const {name, type} = req.body;
  Place.findByIdAndUpdate(req.params.id, {name, type})
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
