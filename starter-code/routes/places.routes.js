const express = require('express')
const router = express.Router()

const Place = require('../models/places.model')


// Listado
router.get('/', (req, res) => {
  Place.find()
    .then(allPlaces => res.render('places/places-list', {
      places: allPlaces
    }))
    .catch(err => console.log("Error consultadno los libros en la BBDD: ", err))
})




// Detalles
router.get('/details/:thePlaceIdFromTheURL', (req, res) => {

  const placeId = req.params.thePlaceIdFromTheURL

  Place.findById(placeId)
    .then(thePlace => res.render('places/place-details', thePlace))
    .catch(err => console.log("Error consultadno el libro en la BBDD: ", err))
})


// Creación
router.get('/add', (req, res) => res.render('places/place-add'))
router.post('/add', (req, res) => {

  const location = {
    type: 'Point',
    coordinates: [req.body.latitude, req.body.longitude]
  }

  const {
    name,
    type
  } = req.body
  Place.create({
      name,
      type,
      location
    })
    .then(() => res.redirect('/places'))
    .catch(err => console.log(err))
})


// Edición
router.get('/edit/:placeId', (req, res) => {

  const placeId = req.params.placeId

  Place.findById(placeId)
    .then(thePlace => res.render('places/place-edit', thePlace))
    .catch(err => console.log(err))
})
router.post('/edit/:placeId', (req, res) => {
  console.log("EL Id que llega como URL param es:", req.params.placeId)
  const placeId = req.params.placeId
  const location = {
    type: 'Point',
    coordinates: [req.body.latitude, req.body.longitude]
  }
  const {
    name,
    type
  } = req.body
  console.log(req.body)
  Place.findByIdAndUpdate(placeId, {
      name,
      type,
      location,
    })
    .then(x => res.redirect(`/places/details/${placeId}`))
    .catch(err => console.log(err))
})

// Borrado
router.post('/:id/delete', (req, res) => {

  const placeId = req.params.id
  console.log(placeId)
  Place.findByIdAndDelete(placeId)
    .then(() => res.redirect('/places'))
    .catch(err => console.log("Error borrando el famoso en la BBDD: ", err))

})

//API
router.get('/api', (req, res, next) => {
  Place.find()
    .then(allPlacesFromDB => res.json(allPlacesFromDB))
    .catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(thePlace => res.json(thePlace))
    .catch(err => next(err))
})

module.exports = router