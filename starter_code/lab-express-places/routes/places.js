const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

//C(R)UD -> Retrieve
router.get('/', (req, res, next) => {
	Place.find()
		.then( places => {
			res.render('places/index', { 
				places,
				placesStr: JSON.stringify(places),
				subtitle: 'Places List'
			});
		})
		.catch( e => {
			console.log('Error on retrieving the list of celebrities', e);
			next(e);
		})
});

//(C)RUD -> Create Show
router.get('/new', (req, res, next) => {
	res.render('places/new');
});

//(C)RUD -> Create
router.post('/new', (req, res, next) => {
	const { name, kind, latitude, longitude } = req.body;

	const newPlace = new Place({ 
		name, 
		kind,
		location: {
			type: 'Point',
			coordinates: [Number(latitude), Number(longitude)]

		}
	});
	
	newPlace.save()
		.then( place => {
			res.redirect('/places');
		})
		.catch( e => {
			console.log('Error on creating a new place', e);
			res.render('places/new', {title: 'Create a new place'});
		})
});


module.exports = router;