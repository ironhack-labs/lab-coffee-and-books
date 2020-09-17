const express = require('express');
const router = express.Router();
const Place = require('../models/place.js');


router.get('/new', (req, res) => res.render('place/new-place'))
router.post('/new', (req, res) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlace = {
    name: req.body.name,
    type: req.body.type,
    location
  }

  Place.create(newPlace)
    .then(() => res.redirect('/place'))
    .catch(err => console.log('Hubo un error :', err))
})

router.get('/', (req, res) => {
  Place.find()
    .select({ name: 1, _id: 1, type:1 })
    .then(place => {
      res.render('place/all-place', {place})
    })
  
})


router.get('/edit/:id', (req, res) => {

  const id = req.params.id

  Place.findById(id)
    .then(fullPlace => res.render('place/place-edit-form', fullPlace))
    .catch(err => console.log('Hubo un error :', err))
})

router.post('/edit/:id', (req, res) => {
  const id = req.params.id
  const { name, type } = req.body
  
  Place.findByIdAndUpdate(id, { name, type })
    .then(() => res.redirect('/place'))
    .catch(err => console.log('Hubo un error :', err))
})

router.get('/delete/:id', (req, res) => {
  const id = req.params.id

  Place.findByIdAndDelete(id)
    .then(() => res.redirect('/place'))
    .catch(err => console.log('Hubo un error :', err))
})

router.get('/details/:id', (req, res) => {
  const id = req.params.id

  Place.findById(id)
    .then(fullPlace => res.render('place/place-details', fullPlace))
    .catch(err => console.log('Hubo un error :', err))
})







module.exports = router