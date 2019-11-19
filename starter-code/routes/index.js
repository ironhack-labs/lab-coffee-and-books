const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

// GET => render the form to create a new place
router.get('/new', (req, res, next) => {
  res.render('places/new');
});

// POST => to create new places and save it to the DB
router.post('/', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
    };
 

	const newPlace = new Place({
		name: req.body.name,
    type: req.body.type,
    location: location
	});

	newPlace.save((error) => {
		if (error) { 
			next(error); 
		} else { 
			res.redirect('/places');
		}
	});
});

// GET => to retrieve all the places from the DB
router.get('/', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('places/index', { places: placesFromDB });
		}
	});
});

// GET => get the form pre-filled with the details of one place
router.get('/:place_id/edit', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
  
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
	Place.find({}, (error, allPlacesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.status(200).json({ places: allPlacesFromDB });
		}
	});
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({_id: placeId}, (error, onePlaceFromDB) => {
		if (error) { 
			next(error) 
		} else { 
			res.status(200).json({ place: onePlaceFromDB }); 
		}
	});
});

// GET => get the details of one place
router.get('/:places_id', (req, res, next) => {
	Place.findById(req.params.places_id, (error, place) => {
    console.log(place)
		if (error) {
			next(error);
		} else {
			res.render('places/show', { place: place });
		}
	});
});

module.exports = router;
