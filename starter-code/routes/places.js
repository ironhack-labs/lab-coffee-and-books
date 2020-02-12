const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')


// Listado de lugares
router.get('/list', (req, res) => {

  Place.find()
    .then(onePlace => res.render('places/list', { places: onePlace }))
    .catch(err => console.log("Error al consultar los lugares en la BBDD: ", err))
})

// Alta nuevo lugar
router.get('/add', (req, res) => res.render('places/new')
)
router.post('/add', (req, res) => {

const objectPlace = {name: req.body.name, type: req.body.type, coords: {lat: req.body.lat, lng: req.body.lng}}

  Place.create({objectPlace})
    .then(() => {

      res.redirect('list')
    })
    .catch(err => console.log(err))
})

// Editar lugar
router.get('/edit/:placeId', (req, res) => {
  console.log("ENTRAAAAAA")

  const placeId = req.query.placeId
  Place.findById(placeId)
    .then(thePlace => res.render('places/edit', thePlace))
    .catch(err => console.log(err))
})

router.post('/edit/:placeId', (req, res) => {
  console.log("EL Id del lugar que llega como URL param es:", req.params.placeId)
  const placeId = req.params.placeId

  Place.findByIdAndUpdate(placeId, req.body, {new: true})
    .then(x => res.redirect(`/places/show/${placeId}`))
    .catch(err => console.log(err))
})

// Consulta de los datos de un lugar
router.get('/:id', (req, res) => {

  const placeId = req.params.id

  Place.findById(placeId)
    .then(placeDetails => res.render('places/show', placeDetails))
    .catch(err => console.log("Error al consultar los lugares en la BBDD: ", err))
})

// Eliminar lugar
router.post('/:id/delete', (req, res) => {
  const placeId = req.params.id

  Place.findByIdAndRemove(placeId)
    .then(() => res.redirect('/places/list'))
    .catch(err => console.log(err))
})




module.exports = router