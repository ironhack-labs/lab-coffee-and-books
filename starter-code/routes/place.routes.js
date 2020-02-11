const express = require('express');
const router = express.Router();

const Place = require('../models/place.models')

// Mostrar lista
router.get('/list', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('places/list', { place: allPlaces }))
    .catch(err => console.log(`Error al renderizar la pagina de movies`))
})

// FORMULARIO, CREAR NUEVOS PLACES
router.get('/add', (req, res) => res.render('places/create'))
router.post('/add', (req, res) => {

  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const { name, type } = req.body

  Place.create({ name, type, location: location })
    .then(() => res.redirect('/list'))
    .catch(() => res.render('places/create'))
})

// ELIMINAR LOS DATOS
router.post('/:id/delete', (req, res) =>
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/list'))
    .catch(err => console.log(`Ha habido un error al borrar los datos: ${err}`))
)

//DETALLES DEL PLACE
router.get('/details/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(thePlace => res.render('places/details', thePlace))
    .catch(err => console.log(`Ha habido un error al detallar los datos: ${err}`))
})

module.exports = router;