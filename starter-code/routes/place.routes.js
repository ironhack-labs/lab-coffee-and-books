 const express = require('express')
 const router = express.Router()

 const Place = require('../models/place.model')

 // Listado de establecimientos
 router.get('/', (req, res) => {
   Place.find()
     .then(AllPlaces => res.render('places/places-list', {
       places: AllPlaces
     }))
     .catch(err => console.log(`Ha habido un error listando a los establecimientos ${err}`))
 })

 // Detalles de los establecimientos
 router.get('/details/:ID', (req, res) => {
   const placesID = req.params.ID
   Place.findById(placesID)
     .then(thePlace => res.render('places/places-details', thePlace))
     .catch(err => console.log(`Ha salido algo mal buscando el establecimiento en la BBDD ${err}`))
 })

 // Creación de los establecimientos
 router.get('/new', (req, res) => res.render('places/places-new'))
 router.post('/new', (req, res) => {
   const location = {
     type: 'Point',
     coordinates: [req.body.longitude, req.body.latitude]
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
     .catch(err => console.log(`Ha salido algo mal creando el nuevo establecimiento ${err}`))
 })
 // Eliminación de establecimientos
 router.get('/delete/:ID', (req, res) => {
   const placeID = req.params.ID
   Place.findByIdAndDelete(placeID)
     .then(() => res.redirect('/places'))
     .catch(err => console.log(`Ha habido un error eliminando el establecimiento de la BBDD ${err}`))
 })
 // Editar un establecimiento
 router.get('/edit', (req, res) => {

   const placeId = req.query.id

   Place.findById(placeId)
     .then(thePlace => res.render('places/places-edit', thePlace))
     .catch(err => console.log(err))
 })
 router.post('/edit/:id', (req, res) => {

   const placeId = req.params.id

   Place.findByIdAndUpdate(placeId, req.body)
     .then(() => res.redirect(`/places/details/${placeId}`))
     .catch(err => console.log(err))
 })

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