const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')


//New Places

router.get('/new', (req, res) => res.render('places/create-place'))
router.post('/new', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.lat, req.body.long]}

  const newPlace = {
      name: req.body.name,
      description: req.body.description,
      location,
      address:req.body.address
  }  

    Place.create(newPlace)
    .then(() => res.redirect('/places'))
    .catch(err => next(err))

})

//Edit Places

router.get('/edit', (req, res) => {

  Place.findById(req.query.id)
  .then(parkToEdit => res.render('places/edit-place',parkToEdit))
  .catch(err => ('Error: ', err))

})
router.post('/edit', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.lat, req.body.long]}

  const newPlace = {
      name: req.body.name,
      description: req.body.description,
      location,
      address:req.body.address
  }  

  Place.findByIdAndUpdate(req.query.id,newPlace)

  .then(() => res.redirect('/places'))
  .catch(err => next(err))

})

//Delete places
router.get('/delete', (req, res) => {

  Place.findByIdAndRemove(req.query.id)
  .then(() => res.redirect('/places'))
  .catch(err => ('Error: ', err))

}) 

//List places
router.get('/', (req, res) => {

  Place.find({})
  .then(allPlaces => res.render('places/places-index', {allPlaces}))
  .catch(err => ('Error: ',err))

})




module.exports = router