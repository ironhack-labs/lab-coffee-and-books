const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
// router.get('/', (req, res, next) => {
// 	Place.find()
// 		res.render('index')
	
  
// });




///////CREATE a new restaurant
router.get('/new', (req, res, next) => {
  res.render('places/new');
});


router.post('/new', (req, res, next) => {
  // add location object here
  let location = {
		// type = 'Point',
		coordinates: [req.body.lng, req.body.lat]
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

/////READ   ALL
router.get('/', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('index', {store : allPlaces, layaout: false, allPlaces: JSON.stringify(allPlaces)});
		}

	});
});

///// EDIT

router.get('/:place_id/edit', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/update', { place });
		}
	});
});

router.post('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) { 
      next(error); 
    } else {
			place.name        = req.body.name;
			place.description = req.body.description;
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
router.get('/:id/delete', (req, res, next) => {
	Place.findByIdAndRemove(req.params.id , function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});


////// VER UNO
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

