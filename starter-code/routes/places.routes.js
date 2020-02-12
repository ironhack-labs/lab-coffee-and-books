const express = require('express');
const router = express.Router();
const Place = require('../models/place');

// GET => render the form to create a new place
router.get('/new', (req, res) => res.render('places/new'))

router.post('/', (req, res, next) => {

	const location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}

	const newPlace = new Place({
		name: req.body.name,
		type: req.body.type,
		location
	})

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
	Place.find({}, (error, placesFromDB) => {
		if (error) {
			next(error);
		} else {
			res.render('places/index-places', { places: placesFromDB });
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
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
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

// DELETE => remove the place from the DB
router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function (error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});






// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
	Place.find()
		.then(allPlacesFromDB => res.json(allPlacesFromDB))
		.catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {
	pPace.findById(req.params.id)
		.then(thePlace => res.json(thePlace))
		.catch(err => next(err))
})








// GET => get the details of one place
router.get('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/show', { place: place });
		}
	});
});

module.exports = router;
