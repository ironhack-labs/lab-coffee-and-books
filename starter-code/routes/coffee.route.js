const express = require('express');
const coffeeRouter  = express.Router();
const Place = require('../models/place.model');

/* GET home page */
coffeeRouter.get('/', (req, res, next) => res.render('coffeeShop'))

coffeeRouter.post('/', (req, res, next) => {

	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}

	const newPlace = new Place({
		name: req.body.name,
    type: req.body.type,
		location
	});

	newPlace.save((error) => {
		if (error) {
			next(error);
		} else {
			res.redirect('/coffeeShop');
		}
	});
});

// FALTA ALGO


coffeeRouter.get('/api', (req, res, next) => {
	Place.find()
		.then(allPlaces => res.json(allPlaces))
		.catch(err => console.log('error', console.log(err)))
})

coffeeRouter.get('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
//POR AQUÍ
		}
	});
});






module.exports = router;