
const express = require('express');
const router = express.Router();
const Place = require('../models/place.model');

router.get('/', (req, res, next) => {
  Place.find()
  .then(allPlaces => res.render('places', { allPlaces }))
  .catch(err => next(err))
})

router.get('/new', (req, res, next) => res.render('places/new'))

router.post('/new', (req, res, next) => {
  
  const { name, description } = req.body
  
  const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }
  
  Place.create({ name, description, location })
  .then(() => res.redirect('/places'))
  .catch(err => next(err))
})

router.get('/api', (req, res, next) => {
  Place.find({})
  .then(allPlacesFromDB => res.json({allPlacesFromDB }))
  .catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {
  
  let placeId = req.params.id
  
  Place.findById(placeId)
  .then(onePlaceFromDB => res.json({ onePlaceFromDB }))
  .catch(err => next(err))
})


// router.get('/:restaurant_id', (req, res, next) => {
//   Place.findById(req.params.restaurant_id)
//     .then(restaurant => res.render('restaurants/show', { restaurant: restaurant }))
//     .catch(err => next(err))
// })





module.exports = router