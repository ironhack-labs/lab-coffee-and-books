const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then(response => {
      res.render('index', {response})
      console.log(response)
    })
    .catch(err => console.log(err))
})

//CREATE

router.post('/new', (req, res, next) => {
  const {
    name,
    type,
    latitude,
    longitude
  } = req.body

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  }

  Place.create({
    name,
    type,
    location
  })
  .then(response => res.redirect('/'))
  .catch(err => console.log(err))
})

//DELETE

router.get('/place-delete/:id', (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(response => res.redirect('/'))
    .catch(err => console.log(err))
})

//EDIT

router.get('/place-edit/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('index', {place}))
    .catch(err => console.log(err))
})

router.post('/', (req, res, next) => {
  const {
    id,
    name,
    type,
    latitude,
    longitude
  } = req.body

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  }

  Place.findByIdAndUpdate(id,{$set: {
    id,
    name,
    type,
    location
  }}, {new: true})
  .then(response => res.redirect('/'))
  .catch(err => console.log(err))
})

//API

router.get('/api/index', (req, res, next) => {
  Place.find()
    .then(places => res.json(places))
    .catch(err => console.log(err))
})


module.exports = router;
