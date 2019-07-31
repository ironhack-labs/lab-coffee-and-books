const express = require('express');
const router = express.Router();
const Restaurant = require('../models/place');



router.get('/new', (req, res, next) => res.render('coffeshops/new'))



router.post('/', (req, res, next) => {

	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}

	const newRestaurant = new Restaurant({
		name: req.body.name,
		description: req.body.description,
		location
	});

	newRestaurant.save((error) => {
		if (error) {
			next(error);
		} else {
			res.redirect('/coffeshops');
		}
	});
});






router.get('/', (req, res, next) => {
	Restaurant.find({}, (error, restaurantsFromDB) => {
		if (error) {
			next(error);
		} else {
			res.render('restaurants/index', { restaurants: restaurantsFromDB });
		}
	});
});



router.get('/api', (req, res, next) => {
	Restaurant.find()
		.then(allRestaurants => res.json(allRestaurants))
		.catch(err => console.log('error', console.log(err)))
})



router.get('/:restaurant_id', (req, res, next) => {
	Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
		if (error) {
			next(error);
		} else {
			res.render('restaurants/show', { restaurant: restaurant });
		}
	});
});


router.get('/:restaurant_id/edit', (req, res, next) => {
	Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
		if (error) {
			next(error);
		} else {
			res.render('restaurants/update', { restaurant });
		}
	});
});



router.post('/:restaurant_id', (req, res, next) => {
	Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
		if (error) {
			next(error);
		} else {
			restaurant.name = req.body.name;
			restaurant.description = req.body.description;
			restaurant.save(error => {
				if (error) {
					next(error);
				} else {
					res.redirect(`/restaurants/${req.params.restaurant_id}`);
				}
			});
		}
	});
});



router.get('/:restaurant_id/delete', (req, res, next) => {
	Restaurant.remove({ _id: req.params.restaurant_id }, function (error, restaurant) {
		if (error) {
			next(error);
		} else {
			res.redirect('/restaurants');
		}
	});
});






















module.exports = router;