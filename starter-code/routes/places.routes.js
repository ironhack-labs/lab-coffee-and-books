const express = require('express');
const router = express.Router();

const Place = require('../models/place.model');

//mostrar detalles
router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
    .then(thePlace => res.render('places/details', {thePlace}))
    .catch(err => next(err))
})

 //crear 
router.get('/new', (req, res,) => res.render('../views/places/new'))

router.post('/new', (req, res, next) => {

    const { name, type, lat, lng } = req.body
console.log("eeeiii")
 Place.create({ name, type, location:{lat, lng}})
    .then(() => res.redirect('/'))
    .catch(err => next(err))

})

//actualizar lista
router.get('/', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('/places/list', {allPlaces}))
    .catch(err => next(err))
})

//eliminar
router.get('/delete/:id', (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/places'))
    .catch(err => next(err))
})




  
module.exports = router





