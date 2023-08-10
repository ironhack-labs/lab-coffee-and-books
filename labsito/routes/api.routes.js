const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

router.get('/lugares', (req, res, next) => {
	Place.find()
		.then(placesFromDB => res.json(placesFromDB))
		.catch(error => next(error))
})

router.post('/')

module.exports = router
