const express = require('express');

const routerPlace = express.Router();

const Place = require('../models/Place');

// GET => render the form to create a new restaurant
routerPlace.get('/new', (req, res, next) => {
  res.render('places/new');
});

// POST => to create new restaurant and save it to the DB
routerPlace.post('/', (req, res, next) => {
  let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};
	const newPlace = new Place({
		name: req.body.name,
    type: req.body.type,
		description: req.body.description,
		location
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
routerPlace.get('/', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('places/index', { places: placesFromDB });
		}
	});
});

// GET => get the form pre-filled with the details of one restaurant
routerPlace.get('/:place_id/edit', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/update', { place });
		}
	});
});

// POST => save updates in the database
routerPlace.post('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) { 
      next(error); 
    } else {
			place.location = {
				type: 'Point',
				coordinates: [req.body.longitude, req.body.latitude]
			};
			place.name = req.body.name;
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

// DELETE => remove the restaurant from the DB
routerPlace.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});


// to see raw data in your browser, just go on: http://localhost:3000/api
routerPlace.get('/api', (req, res, next) => {
	Place.find({}, (error, allPlacesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.status(200).json({ restaurants: allPlacesFromDB });
		}
	});
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
routerPlace.get('/api/:id', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({_id: placeId}, (error, onePlaceFromDB) => {
		if (error) { 
			next(error) 
		} else { 
			res.status(200).json({ restaurant: onePlaceFromDB }); 
		}
	});
});

// GET => get the details of one restaurant
routerPlace.get('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/show', { place: place });
		}
	});
});


module.exports = routerPlace;
