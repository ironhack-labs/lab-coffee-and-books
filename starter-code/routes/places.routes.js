const express = require('express');
const router = express.Router();
const Place = require('../models/place');



router.get('/new', (req, res, next) => res.render('new-place'))

router.post('/new', (req, res, next) => {

	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}

  const {name, type} = req.body
	
  Place.create({name, type, location})
    .then(()=> res.redirect('/places'))
    .catch(err => console.log('error', console.log(err)))
})






router.get('/', (req, res, next) => {
	Place.find()
    .then(places => res.render('index', {places}))
    .catch(err => console.log('error', console.log(err)))
})



router.get('/api', (req, res, next) => {
	Place.find()
		.then(allPlaces => res.json(allPlaces))
		.catch(err => console.log('error', console.log(err)))
})



router.get('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id)
    .then(place => res.render('show-place', {place}))
    .catch(err => console.log('error', console.log(err)))
})


router.get('/:place_id/edit', (req, res, next) => {
	Place.findById(req.params.place_id)
    .then(place => res.render('edit-place', {place}))
    .catch(err => console.log('error', console.log(err)))
})

router.post('/:place_id', (req, res, next) => {

  const {name, type, location} = req.body

  Place.findByIdAndUpdate(req.query.placeId, {$set: {name, type, location}}, {new: true})
    .then(() => res.redirect(`/places/${req.params.place_id}`))  //`/restaurants/${req.params.restaurant_id}`
    .catch(err => console.log('Hubo un error:', err))
})


router.get('/:place_id/delete', (req, res, next) => {

  const placeId = req.params.id
	Place.findOneAndDelete({ _id: placeId }) 
    .then(() => res.redirect('/places'))  
    .catch(err => console.log('Hubo un error:', err))
})


module.exports = router;