const express = require('express');
const router = express.Router();

const Place = require('../models/places.model')





// Lista de libros
router.get('/', (req, res) => {
  Place.find()
    .then(allThePlaces => res.render('places/placesList', {
      places: allThePlaces
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// Detalles de libro
router.get('/details/:id', (req, res) => {
  const placeId = req.params.id
  Place.findById(placeId)
    .then(thePlace => res.render('Places/PlaceDetails', {
      place: thePlace
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// Nuevo libro: renderizar formulario
router.get('/add', (req, res) => res.render('places/newPlace'))

// Nuevo libro: enviar formulario
router.post('/add', (req, res) => {


  const {name, type} = req.body

  Place.create({ name, type })
    .then(x => res.redirect('/places'))
    .catch(err => 'error: ' + err)
})





// Editar libro: renderizar formulario
router.get('/edit', (req, res) => {
  const placeId = req.query.placeId
  Place.findById(placeId)
    .then(thePlace => res.render('places/editPlace', thePlace))
    .catch(err => console.log('error!!', err))
})


// Editar libro: enviar formulario
router.post('/edit', (req, res) => {
  const { name, type} = req.body
  const placeId = req.query.placeId


  Place.findByIdAndUpdate(placeId, {name, type })
    .then(res.redirect('/places'))
    .catch(err => console.log('error!!', err))

})




module.exports = router;