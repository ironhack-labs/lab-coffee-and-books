const express = require('express');
const router = express.Router();
const Place = require("../models/place.model")

//List all
router.get('/', (req, res, next) => {
	Place.find({}, (error, placesFromDB) => {
		if (error) {
			next(error);
		} else {
			res.render('places/index', { place: placesFromDB });
		}
	});
});

// New place
router.get('/new', (req, res, next) => {
  res.render('places/new');
});
router.post('/new', (req, res, next) => {

	console.log("***********************", req.body)

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
			res.redirect('/');
		}
	});
});


//Delete
router.get('/places/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function (error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});

//Detail

router.get("/places/:place_id", (req, res,next) => {
  console.log(req)
  Place.findById(req.params.place_id, (error, place) => {
  res.render("places/detail", place)
  })
})

router.post('/places/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			place.name = req.body.name
      place.type = req.body.type
      place.longitude = req.body.longitude
      place.latitude = req.body.latitude
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
// http://localhost:3000/api
router.get('/api', (req, res, next) => {
	Place.find({}, (error, allPlacesFromDB) => {
		if (error) {
			next(error);
		} else {
			res.status(200).json({ places: allPlacesFromDB });
		}
	});
});
router.get('/api/:id', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
		if (error) {
			next(error)
		} else {
			res.status(200).json({ placeId: onePlaceFromDB });
		}
	});
});
module.exports = router;
