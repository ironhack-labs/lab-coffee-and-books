const express = require('express');
const router = express.Router();
const Place = require('../model/place');



router.get('/new', (req, res, next) => res.render('places/new'))



router.post('/', (req, res, next) => {

	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}
//CREAR NUEVO RESTAURANTE  ----- ANTIGUO MEJOR CON CREATE-------------
	const newPlace = new Place({
		name: req.body.name,
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




//// PINTAR SITIOS DE LA BASE DE DATOS ------------------

router.get('/', (req, res, next) => {
	Place.find({}, (error, placesFromDB) => {
		if (error) {
			next(error);
		} else {
			res.render('places/', { places: placesFromDB });
		}
	});
});


//// ENCONTRAR SITIOS DE LA BASE DE DATOS ------------------
router.get('/api', (req, res, next) => {
	Places.find()
		.then(allPlaces => res.json(allPlaces))
		.catch(err => console.log('error', console.log(err)))
})


//// ENCONTRAR SITIOS DE LA BASE DE DATOS POR SU ID ------------------

router.get('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/show', { place: place });
		}
	});
});

//// HACER UPDATE DE RESTAURANTES DE LA BASE DE DATOS ------------------ ANTIGUO

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
			place.name = req.body.name;
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

//// ELIMINAR RESTAURANTES DE LA BASE DE DATOS ------------------ ANTIGUO

router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function (error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});

module.exports = router;
