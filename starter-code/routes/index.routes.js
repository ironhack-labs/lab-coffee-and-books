const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

/* GET home page */
router.get('/', (req, res, next) => {
	Place.find({})
		.then(allPlaces => res.render('index', { places: allPlaces }))
		.catch(err => console.log('ha habido un error: ', err))
})

router.get('/create', (req, res, send) => res.render('create'))
router.post('/create', (req, res, send) => {
	const { name, type, lat, lng } = req.body

	if (name === '' || type === '' || lat.length === 0 || lng.length === 0) {
		res.render('create')
		return
	}
	Place.findOne({ name })
		.then(place => {
			if (place) {
				res.render('create')
				return
			}
			Place.create({ name, type, lat, lng })
				.then(() => res.redirect('/'))
				.catch(err => console.log('Ha habido un error: ', err))
		})
		.catch(error => {
			next(error)
		})
})

router.get('/api', (req, res, next) => {
	Place.find()
		.then(allPlaces => res.json(allPlaces))
		.catch(err => console.log('error', console.log(err)))
})

module.exports = router
