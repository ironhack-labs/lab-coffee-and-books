const express = require('express');
const router = express.Router();
const Places = require('../models/place.model')

/* GET home page */
router.get('/', (req, res) => { Places.find()
    .then(allPlaces =>res.render('places/place', {allPlaces}))
    .catch(err => console.log("Error consultando la BBDD ", err))});

/* GET DETAILS */
router.get('/details/:id', (req, res) => {
  Places.findById(req.params.id)
    .then(place => res.render('places/details', {
      place
    }))
    .catch(err => console.log("Error consultando la BBDD", err))
})

/* DELETE */

router.get('/:id/delete', (req, res) => {
  Places.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/place'))
    .catch(err => console.log("Error consultando la BBDD", err))
})

/* NEW */

router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }
  const {
    name,
    type,
  } = req.body
  console.log(location)
  Places.create({
      name,
      type,
      location
    })
    .then(newPlace => res.redirect('/place'))
    .catch(err => console.log("Error consultando la BBDD", err))
})

/* EDIT */

router.get('/:id/edit', (req, res) => {
  Places.findById(req.params.id)
    .then(place => res.render('places/edit', place))
    .catch(err => console.log("Error consultando la BBDD", err))
})

router.post('/:id/edit', (req, res) => {
  const {
    name,
    type,
  } = req.body
  let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
  }
  Places.findByIdAndUpdate(req.params.id, {
      name,
      type,
      location
    })
    .then(() => {
      res.redirect('/place')
    })
    .catch(err => console.log('Error consultando la BBDD', err))
})

router.get('/api', (req, res, next) => {
  Places.find()
    .then(placesFromDB => res.status(200).json({
      place: placesFromDB
    }))
    .catch(err => next(err))
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Places.findOne({
    _id: placeId
  }, (error, oneplaceFromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({
        place: oneplaceFromDB
      });
    }
  });
});


module.exports = router;

