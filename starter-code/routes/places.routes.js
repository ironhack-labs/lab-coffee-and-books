const express = require('express')
const router = express.Router()

const Place = require('./../models/place')

// All places

router.get('/', (req, res) => {

  Place
    .find()
    .then(allPlaces => res.render('places/show', { allPlaces }))
    .catch(err => new Error(err))
})

//Detail places

router.get('/delete-place', (req, res) => {
  
  const placeId = req.query.place_id

  Place
    .findByIdAndDelete(placeId)
    .then(() => res.redirect('/places'))
    .catch(err => new Erros(err))

})

//Edit place

router.get('/edit-place', (req, res) => {

  const placeId = req.query.place_id

  Place
    .findById(placeId)
    .then(plac => res.render('places/edit', plac))
    .catch(err => new Error(err))
})

router.post('/edit-place', (req, res) => {

  const placeId = req.query.place_id

  const { name, type, latitude, longitude} = req.body


  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .findByIdAndUpdate(placeId, {name, type, location})
    .then(place => res.redirect('/places'))
    .catch(err => new Error(err))

})

//Create Place

router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res) => {
  
  const { name, type, latitude, longitude } = req.body
  
  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch(err => new Error(err))

})




module.exports = router
