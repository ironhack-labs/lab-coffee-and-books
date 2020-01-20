const express = require('express');
const router = express.Router();
const Place = require("../models/place")
const multer  = require('multer');
// const upload = multer({ dest: './public/uploads/' });
const uploadCloud = require('../config/cloudinary.js');

/* GET home page */
router.get('/', (req, res, next) => {
	Place.find({}, (error, placesFromDB) => {
		if (error) {
			next(error);
		} else {
					res.render('index', { places: placesFromDB });
		}
	});
});

//API
router.get('/api', (req, res, next) => {
	Place.find({}, (error, allPlacesFromDB) => {
		if (error) {
			next(error);
		} else {
			res.status(200).json({ places: allPlacesFromDB });
		}
	});
});

//Rota create
router.get('/new', (req, res, next) => {
	res.render('places/new');
});

//rota params id
router.get('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/show', { places: place });
		}
	});
});

//rota params id_edit
router.get('/place/:place_id/edit', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/update', { place });
		}
	});
});

//post edit
router.post('/update/:place_id',uploadCloud.single('photo'), (req, res, next) => {

	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			place.name = req.body.name;
			place.description = req.body.description
			place.type = req.body.type;
			place.location.coordinates = [req.body.longitude, req.body.latitude]
			if(!req.file){
				place.name = place.name
			}else{
				place.namePicture = req.body.namePicture
				place.image = req.file.url
			}
			place.save(error => {
				if (error) {
					next(error);
				} else {
					res.redirect(`/${req.params.place_id}`);
				}
			});
		}
	});
});

//delete
router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function (error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});

//create new
router.post('/',uploadCloud.single('photo'), (req, res, next) => {

	// add the location object
	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};

	const newPlace = new Place({
    image: req.file.url,
    originalName: req.file.originalname,
		name: req.body.name,
		description: req.body.description,
		type: req.body.type,
		location: location // <= add the location when creating a new place
	});

	newPlace.save((error) => {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	})
});

module.exports = router;
