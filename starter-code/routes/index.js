const express = require('express');
const router = express.Router();
const Place = require('../model/places.model')

//Find places
router.get('/', (req, res, next) => {
  Place.find()
    .then(placesFound => res.render('index', { placesFound }))
    .catch(err => console.log('no se encontraron los places', err))
});

//Find especific place

router.get('/:id/dets', (req, res, next) => {
  Place.findById(req.params.id)
    .then(foundPlace => res.render('details', foundPlace))
    .catch(err => console.log('No se puede acceder a ese elemento', err))
})

//Add
router.get('/add-new', (req, res, next) => { res.render('add') })
router.post('/', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.lat, req.body.long]
  }
  
  Place.create( { name: req.body.name, typeOfPlace: req.body.typeOfPlace, location } )
    .then(() => res.redirect('/'))
    .catch( err => console.log('No se ha añadido nada', err))
  
})

//Delete
router.post('/:id/delete', (req, res, next) => {

  Place.findByIdAndRemove(req.params.id)
    .then(res.redirect('/'))
    .catch(err => console.log('No se borró nada', err))

})

// Edit
router.get('/:id/edit', (req, res, next) => {
  Place.findById(req.params.id)
    .then(toEdit => res.render('edit', toEdit))
    .catch(err=> console.log('No hemos pillao nada para editar', err))
})

router.post('/:id/edit', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.lat, req.body.long]
  }
  
  Place.findByIdAndUpdate( req.params.id, { name: req.body.name, typeOfPlace: req.body.typeOfPlace, location }, {new: true} )
    .then(() => res.redirect('/'))
    .catch( err => console.log('sin editar', err))
})

//API google
router.get('/api', (req, res, next) => {
  Place.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


module.exports = router;
