const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

router.get('/lugares', (req, res, next) => {
	Place.find()
		.then(placesFromDB => res.json(placesFromDB))
		.catch(error => next(error))
})

router.post('/crear-lugar', (req, res, next) => {
	const { myPlaceDirection, myPlaceLat, myPlaceLng } = req.body

	const defaultType = 'Place From Map'
	const location = {
		type: 'Point',
		coordinates: [myPlaceLng, myPlaceLat],
	}

	Place.create({ name: myPlaceDirection, type: defaultType, location })
		.then(() => res.redirect('/map'))
		.catch(error => next(error))
})

module.exports = router
