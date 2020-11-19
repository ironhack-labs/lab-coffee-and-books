const express = require('express')
const router = express.Router()

const Place = require('./../models/place')


// -- ENDPOINTS PLACES --

// Muestra el formulario para crear un lugar (GET)
router.get('/new', (req, res) => res.render('places/place-new'))



// Guarda en la BBDD un lugar (POST)
router.post('/new', (req, res, next) => {

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
      .create({ name, type, location })
      .then(() => res.redirect('/places'))
      .catch(err => next(new Error(err)))
})



// Muestra la lista de los lugares (GET)
router.get('/', (req, res, next) => {

  Place
      .find()
      .then(allPlaces => {
        res.render('places/place-index', { allPlaces })
      })
      .catch(err => next(new Error(err)))
})



// Elimina de la BBDD un lugar
router.get('/delete', (req, res, next) => {

  const placeId = req.query.id

  Place
      .findByIdAndDelete(placeId)
      .then(() => res.redirect('/places'))
      .catch(err => next(new Error(err)))
})



// Muestra un formulario para editar un lugar (GET)
router.get('/edit', (req, res, next) => {

  const placeId = req.query.id
  
  Place
      .findById(placeId)
      .then(thePlace => res.render('places/place-edit', thePlace))
      .catch(err => next(new Error(err)))
})



// Edita en la BBDD un lugar (POST)
router.post('/edit', (req, res, next) => {
  
  const placeId = req.query.id

  const { name, type, latitude, longitude } = req.body

  const location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place
      .findByIdAndUpdate(placeId, { name, type, location })
      .then(() => res.redirect('/places'))
      .catch(err => next(new Error(err)))
})



// Muestra los detalles de un lugar
router.get('/:place_id', (req, res, next) => {

  const placeId = req.params.place_id

  Place
      .findById(placeId)
      .then(thePlace => {
          res.render('places/place-details', thePlace)
      })
      .catch(err => next(new Error(err)))
})



module.exports = router