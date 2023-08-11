const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

router.get('/create', (req, res, next) => {
	res.render('places/new-place-form')
})

router.post('/create', (req, res, next) => {
	const { name, type, latitude, longitude } = req.body

	const location = {
		type: 'Point',
		coordinates: [longitude, latitude],
	}

	Place.create({ name, type, location })
		.then(() => res.redirect('/list'))
		.catch(error => next(error))
})

router.get('/list', (req, res, next) => {
	Place.find().then(placesFromDB => res.render('places/places-list', { places: placesFromDB }))
})

router.get('/edit/:id', (req, res, next) => {
	const { id: place_id } = req.params

	Place.findById(place_id)
		.then(placeFound => res.render('places/edit-place-form', { place: placeFound }))
		.catch(error => next(error))
})

router.post('/edit/:id', (req, res, next) => {
	const { name, type } = req.body
	const { id: place_id } = req.params

	Place.findByIdAndUpdate(place_id, { name, type })
		.then(() => res.redirect('/list'))
		.catch(error => next(error))
})

router.post('/delete/:id', (req, res, next) => {
	const { id: place_id } = req.params

	Place.findByIdAndDelete(place_id)
		.then(() => res.redirect('/list'))
		.catch(error => next(error))
})

router.get('/map', (req, res, next) => {
	res.render('places/places-map')
})

module.exports = router
