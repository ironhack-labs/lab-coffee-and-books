const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

router.get('/places', (req, res, next) => {
	Place.find()
	.then(places => {
		res.render('places/index', {places});
	})
	.catch(error => {
		res.render(error);
	})
});

router.get('/places/api', (req, res, next) => {
	Place.find()
	.then(places => {
		res.send(places);
	})
	.catch(error => {
		res.render(error);
	})
});

router.get('/places/:id', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({'_id': placeId})
	.then(place => {
		console.log(place)
		res.render('places/show', {place});
	})
	.catch(error => {
		res.render('error');
	})
});

router.get('/places/api', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({'_id': placeId})
	.then(place => {
		console.log(place)
		res.send(place);
	})
	.catch(error => {
		res.render('error');
	})
});


router.get('/place/new', (req, res, next) => {
	Place.find()
	.then(places => {
		console.log(places)
		res.render('places/new', {places});
	})
	.catch(error => {
		res.render('error');
	})
});

router.post('/place/new', (req, res, next) => {
	const { name, type, latitude, longitude } = req.body;
	const newPlace = new Place({ name, type, latitude, longitude });
	newPlace.save()
	.then((place) => {
		res.redirect('/places');
	})
	.catch((error) => {
		console.log(error);
		res.render('error');
	})
});

router.post('/places/:id/delete', (req, res, next) => {
	let placeId = req.params.id;
	Place.findByIdAndRemove({'_id': placeId})
	.then((place) => {
		res.redirect('back');
	})
	.catch((error) => {
		res.render('error');
	})
});


router.get('/places/:id/edit', (req, res, next) => {
	const placeId = req.params.id;
	Place.findOne({'_id': placeId})
	.then(place => {
		console.log(place)
		res.render('places/edit', {place});
	})
	.catch((error) => {
		res.render('error')
	});
});

router.post('/places/:id', (req, res, next) => {
	const { name, type, latitude, longitude } = req.body;
	const placeId = req.params.id;
  Places.update({'_id': placeId}, { $set: { name, type, latitude, longitude }})
  .then((place) => {
    res.redirect('/places');
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
