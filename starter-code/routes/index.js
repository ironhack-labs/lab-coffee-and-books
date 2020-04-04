const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {

  Place.find()
    .then(allPlaces => {
      console.log('yo')
      res.render('index', {
        allPlaces
      })
    })
    .catch(error => next(error))
});

// CREATE PLACE

router.get('/create', (req, res, next) => {
  res.render('places/create');
});

router.post('/create', (req, res, next) => {
  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }
  console.log(location)
  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location: location,
  })

  Place.create(newPlace)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// DISPLAY PLACES

router.get('/api', (req, res, next) => {
  Place.find()
    .then(allPlacesFromDB => {
      console.log('chegou na rota')
      res.json(allPlacesFromDB)
    })
    .catch(error => console.log(error))
})

router.get('/:id', (req, res, next) => {
  console.log("route id OK!!!")
  Place.findById(req.params.id)
    .then(placeFromDB => {
      console.log(placeFromDB.location.coordinates[0], " || ", placeFromDB.location.coordinates[1])
      res.render('places/profile', placeFromDB)
    })
    .catch(error => console.log(error))
})

// UPDATE PLACE

router.get('/:id/edit', (req, res, next) => {
  Place.findById(req.params.id)
    .then(placeFromDB => res.render('places/edit', placeFromDB))
    .catch(error => console.log(error))
})

router.post('/:id/edit', (req, res, next) => {
  const {
    name,
    type
  } = req.body

  Place.findByIdAndUpdate(req.params.id, {
      name,
      type
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
  })
  
  // DELETE PLACE
  
  router.get('/:id/delete', (req, res, next) => {
    Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
  })
  

module.exports = router;