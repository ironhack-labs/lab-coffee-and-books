const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/places/add', (req, res, next) => {
	res.render('place-add');
});

router.post('/places/add', (req, res, next) => {
  const data = {
    name,
    type,
    latitude,
    longitude
  } = req.body;

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  } 

  Place
    .create({
      name,
      type,
      location
    })
    .then(() => res.redirect('/places'))
    .catch((error) => console.log(error));
});

router.get('/places/delete/:id', (req, res, next) => {
  const { id } = req.params;
  Place
    .findByIdAndRemove(id)
    .then(() => res.redirect('/places'))
    .catch(error => console.log(error));
})

router.get('/places', (req, res, next) => {
	Place.find()
		.then((placesFromDB) => {
			res.render('places', { placesFromDB });
		})
		.catch((error) => console.log(error));
});

router.get('/places/:id', (req, res, next) => {
	Place.findById(req.params.id)
		.then((placeFromDB) => {
			res.render('place-details', placeFromDB);
		})
		.catch((error) => console.log(error));
});

router.get('/places/edit/:id', (req, res, next) => {
	Place.findById(req.params.id)
		.then((placeFromDB) => {
			res.render('place-edit', placeFromDB);
		})
		.catch((error) => console.log(error));
});

router.post('/places/edit/:id', (req, res, next) => {
  const data = {
    name,
    type,
    location
  } = req.body;

  const { id }  = req.params;

	Place.findByIdAndUpdate(id, { $set: data }, { new: true } )
		.then(() => res.redirect(`/places/${id}`))
		.catch((error) => console.log(error));
});

router.get('/api/places', (req, res, next) => {
  Place 
    .find()
    .then(placesFromDB => res.json(placesFromDB))
    .catch(error => console.log(error))
})

module.exports = router;
