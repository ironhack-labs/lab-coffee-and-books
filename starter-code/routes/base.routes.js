const express = require('express')
const router = express.Router()
const Place = require('../models/place')

// Endpoints
router.get('/', (req, res) => res.render('index'))

//NEW
router.get('/new', (req, res, next) => res.render('new'))

router.post('/new', (req, res, next) => {

  const { name, description } = req.body

  const location = { type: 'Point', coordinates: [req.body.latitude, req.body.longitude] }

  Place.create({ name, description, location })
    .then(place => {
      console.log(place)
      res.redirect('/')
    })
    .catch(err => next(err))
})


//GET LIST
router.get('/place', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('place', { allPlaces }))
    .catch(err => next(err))
})


// //PLACE DETAILS
// router.get('/place/show/:place_id', (req, res, next) => {
//   Place.findById(req.params.place_id)
//     .then(place => res.render('show', place))
//     .catch(err => next(err))
// })



//EDIT GET
router.get('/place/:place_id/edit', (req, res, next) => {
  Place.findById(req.params.place_id)
    .then(place => res.render('edit', place))
    .catch(err => next(err))
})


// //DELETE
// router.get('/place/:place_id/delete', (req, res, next) => {
//   Place.findByIdAndDelete(req.params.place_id)
//     .then(() => res.redirect('/place'))
//     .catch(err => next(err))
// })

//EDIT POST
router.post('/place/:place_id/edit', (req, res, next) => {

  const { name, description } = req.body

  Place.findByIdAndUpdate(req.params.place_id, { name, description }, { new: true })
    .then(place => res.redirect(`/place`))
    .catch(err => next(err))
})

//DELETE
router.get('/place/:place_id/delete', (req, res, next) => {
  Place.findByIdAndDelete(req.params.place_id)
    .then(() => res.redirect('/place'))
    .catch(err => next(err))
})

//API

router.get('/api', (req, res, next) => {
  Place.find()
    .then(allPlacesFromDB => res.json({ place: allPlacesFromDB }))
    .catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {

  let placeId = req.params.id

  Place.findById(placeId)
    .then(onePlaceFromDB => res.json({ place: onePlaceFromDB }))
    .catch(err => next(err))
})

//PLACE DETAILS
router.get('/place/show/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id)
    .then(place => res.render('show', place))
    .catch(err => next(err))
})

// router.get('/:place_id', (req, res, next) => {
//   Place.findById(req.params.place_id)
//     .then(place => res.render('place/show', { place: place }))
//     .catch(err => next(err))
// })





module.exports = router

