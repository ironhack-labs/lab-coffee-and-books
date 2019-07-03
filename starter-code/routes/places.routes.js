const express = require('express')
const router = express.Router()

// Requerimos el modelo Place
const Place = require('../models/Place')


// Lista de Place
router.get('/', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('places/list', { places: allPlaces }))
    .catch(error => console.log(error))
})



// Añadiendo nuevas places con GET
router.get('/add', (req, res, next) => res.render('places/add'))

// Añadiendo nuevas places con POST
router.post('/add', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body

  let location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  const newPlace = new Place({ name, type, location })

  newPlace.save()
    .then(x => {
      console.log(`Un nuevo place fue añadido ${newPlace}`)
      res.redirect('/places')  // place
    })
    .catch(error => {
      res.redirect('/places') //place
      console.log(error)
    })
})

//para ver los lugares
router.get('/api', (req, res, next) => {
  Place.find()
    .then(api => res.status(200).json({ places: api }))
    .catch(err => console.log(err))
})

// route para borrar places con POST

router.get('/:place_id/delete', (req, res, next) => {
  Place.findByIdAndDelete(req.params.place_id)
    .then(thePlace => res.redirect('/places'))
    .catch(err => console.log(err))
})
// router.post('/list/:place_id/delete', (req, res, next) => {
//   Place.findByIdAndDelete(req.params.place_id)
//     .then(thePlace => res.redirect('/place'))
//     .catch(error => console.log(error))
// })


// Detail places
router.get('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id)
    .then(thePlace => res.render('places/detail', { place: thePlace }))
    .catch(err => console.log(err))
})



//Editando places con GET
router.get('/list/:place_id/edit', (req, res, next) => {
  Place.findById(req.params.place_id)
    .then(thePlace => res.render('places/edit', { place: thePlace }))
    .catch(error => console.log(error))
})


//Editando places con POST
router.post('/:place_id/edit', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body

  let location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place.update({ _id: req.params.place_id }, { $set: { name, type, location } })
    .then(x => {
      res.redirect('/places') //place
    })
    .catch(error => console.log(error))
})

router.post('/list', (req, res, next) => {
  const { coffeshop, bookstore } = req.body
  Place.update({ _id: req.query.place_id }, { $set: { coffeshop, bookstore } })
    .then(thePlace => {
      res.redirect('/places') //place
    })
    .catch(error => console.log(error))
})


module.exports = router