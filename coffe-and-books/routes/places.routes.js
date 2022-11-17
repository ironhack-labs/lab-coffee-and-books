const express = require('express');
const { findById } = require('./../models/Places.model');
const router = express.Router();

const Place = require('./../models/Places.model')


router.get("/", (req, res, next) => {
  // res.send('conected to places')

  Place
    .find()
    .sort({ type: 1 })
    .then(place => {
      
      res.render("places/list", {place});
  })
})

router.get('/create', (req, res, next) => {
  // res.send('create places')

  res.render('places/new-place')
})


router.get('/:id/details', (req, res, next) => {
  // res.send('places details')
  const { id: place_id } = req.params
  
  Place
    .findById(place_id)
    .then(place => {
      // res.send(place)
      res.render('places/details', place)
    })
    .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res, next) => {
  //  res.send('edit places')
  const {id:place_id}= req.params
  
  Place
    .findById(place_id)
    .then(place => {
      res.render('places/edit-place', place)
    })
    .catch(err => console.log(err))
})


router.post('/create', (req, res, next) => {

  const { name, type, latitude :lat, longitude:lng } = req.body

  const location = {
        type: 'Point',
        coordinates: [lat, lng]
  }
  
  // res.send({name, type})
  // res.send({ name, type, location })
  Place
    .create({ name, type, location })
    .then((place) => {
      console.log(place)
      res.redirect('/places')
    })
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res, next) => {
  //  res.send('edit places')

  const { id: place_id } = req.params
  const { name, type, latitude, longitude } = req.body

  const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
  
  Place
    .findByIdAndUpdate(place_id, { name, type, location })
    .then(() => {
      // res.send(place)
      res.redirect(`/places/${place_id}/details`)
    })
    .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res, next) => { 
  // res.send('delete')

  const { id: place_id } = req.params
  
  Place
    .findByIdAndDelete(place_id)
    .then(() => {
      // res.send(place)
      res.redirect('/places')
    })
    .catch(err => console.log(err))
})
module.exports = router;
