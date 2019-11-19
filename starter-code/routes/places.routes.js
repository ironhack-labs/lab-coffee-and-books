const express = require('express');
const router  = express.Router();

const Place = require('../models/place.model');



// GET => Nos sacamos una lista de todos los places

router.get('/', (req, res, next) => {
	Place.find({}, (error, placesFromDB) => {
		if (error) {
			next(error);
		} else {
			res.render('places/index', { places: placesFromDB });
		}
	});
});

router.get('/new', (req, res, next) => res.render('places/new'))

// POST => Creamos un nuevo place  y lo pasamos a la DB

router.post('/', (req, res, next) => {

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
			res.redirect('/places');
		}
  })
})


// GET => Editamos los places

router.get('/:place_id/update', (req, res, next) => {
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
					res.redirect(`/places`);
				}
			});
		}
	});
});

// router.get('/:place_id/update', (req, res) => {
//   const place = req.query.place
//   Place.findById(place)
//     .then(thePlace => res.render('places/update', thePlace))
//     .catch(err => console.log('error!!', err))
// })

// router.post('/:place_id', (req, res) => {
//   const { name, type, location } = req.body
//   const place = req.query.place


//   Place.findByIdAndUpdate(place, { name, type, location })
//     .then(res.redirect('/places'))
//     .catch(err => console.log('error!!', err))

// })


// DELETE => remove the restaurant from the DB
router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function (error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});



router.get('/api', (req, res, next) => {
	Place.find()
		.then(allPlacesFromDB => res.status(200).json({ places: allPlacesFromDB }))
		.catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
		if (error) {
			next(error)
		} else {
			res.status(200).json({ place: onePlaceFromDB });
		}
	});
});

// GET => get the details of one restaurant
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



