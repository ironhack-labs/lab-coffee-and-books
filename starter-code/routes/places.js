const express = require('express')
const router = express.Router()
const Place = require('../models//place-model')

//list
router.get('/', (req, res, next) => {
  Place.find()
  .then(allPlaces => res.render('places/index', {places: allPlaces}))
  .catch(err => console.log(`An error ocurred: ${err}`)) 
})

//details 
router.get('/show/:id', (req, res, next) => {
  const placeId = req.params.id
  
  Place.findById(placeId)
  .then(onePlace => res.render('places/show', onePlace))
  .catch(err => console.log(`An error ocurred: ${err}`))
})

//add
router.get('/new', (req, res, next) => res.render('places/new'))

router.post('/new', (req, res, next) => {
  let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
  }
  
    const newPlace = new Place({
      name: req.body.name,
      type: req.body.type,
      location
    })

    Place.create(newPlace)
    .then(() => res.redirect('/places'))
    .catch(err => console.log(`An error ocurred adding the place: ${err}`))
})


//delete
router.post('/:id/delete', (req, res, next) => {
  const placeId = req.params.id

  Place.findByIdAndRemove(placeId)
  .then(()  => res.redirect('/places'))
  .catch(err => console.log(`An error ocurred deleting the place: ${err}`))
})

//edit
router.get('/edit', (req, res, next) => {
  const placeId = req.query.id

  Place.findById(placeId)
  .then(onePlace => res.render('places/edit', onePlace))
  .catch(err => console.log(`An error ocurred updating the place: ${err}`))
})

router.post('/edit/:id', (req, res, next) => {
  const placeId = req.query.id

  let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
  }
  
    const newPlace = new Place({
      name: req.body.name,
      type: req.body.type,
      location
    })

  Place.findByIdAndUpdate(placeId, newPlace, { new: true })
  .then(() => res.redirect('/places'))
  .catch(err => console.log(`An error ocurred updating the place: ${err}`))
})

// api

router.get('/api', (req, res, next) => {
  Place.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


module.exports = router