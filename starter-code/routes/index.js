const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

// GET => render the form to create a new restaurant
router.get('/new', (req, res, next) => {
  res.render('places/new');
});

// POST => to create new restaurant and save it to the DB
router.post('/', (req, res, next) => {
  // add location object here
  console.log(req.body)

	const newPlace = new Place({
		name: req.body.name,
		type: req.body.type
	});

	newPlace.save((error) => {
		if (error) { 
			next(error); 
		} else { 
			res.redirect('/places');
		}
	});
});

// GET => to retrieve all the restaurants from the DB
router.get('/', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('places/index', { places: placesFromDB });
		}
	});
});

// GET => get the form pre-filled with the details of one restaurant
router.get('/:place_id/edit', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
    console.log(place.type)
		if (error) {
			next(error);
		} else {
			res.render('places/update', { place });
		}
	});
});

// POST => save updates in the database
router.post('/:place_id', (req, res, next) => {
	Places.findById(req.params.place_id, (error, place) => {
		if (error) { 
      next(error); 
    } else {
			place.name        = req.body.name;
			place.type = req.body.type;
			place.save(error => {
				if (error) { 
					next(error); 
				} else { 
					res.redirect(`/places/${req.params.place_id}`); 
				}
			});
		}
	});
});

// DELETE => remove the place from the DB
router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});


// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
	Restaurant.find({}, (error, allRestaurantsFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.status(200).json({ restaurants: allRestaurantsFromDB });
		}
	});
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
	let restaurantId = req.params.id;
	Restaurant.findOne({_id: restaurantId}, (error, oneRestaurantFromDB) => {
		if (error) { 
			next(error) 
		} else { 
			res.status(200).json({ restaurant: oneRestaurantFromDB }); 
		}
	});
});

// GET => get the details of one place
router.get('/:places_id', (req, res, next) => {
	Place.findById(req.params.places_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/show', { place: place });
		}
	});
});

module.exports = router;
