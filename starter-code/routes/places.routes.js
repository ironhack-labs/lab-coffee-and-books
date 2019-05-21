const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

// Renderizar los restaurantes de la DB

router.get('/', (req, res, next) => {
	Place.find({}, (error, placeFromDB) => {
		if (error) {
			next(error);
		} else {
			res.render('index', { places: placeFromDB });
		}
	});
});

/* GET home page */


router.get('/new', (req, res, next) => {
	res.render('new');
});

//DELETE

router.get('/:id/delete', (req, res) => {
  Place.findByIdAndRemove({_id: req.params.id})
  // nombre del campo a popular
  .then(data => {res.redirect('/')})
  .catch(error => console.log(error))
})

//POST PLACE IN INDEX

router.post('/', (req, res, next) => {

	console.log(req.body)

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

//EDIT A PLACE

// // GET 
// router.get('/:_id/edit', (req, res, next) => {
// 	Place.findById(req.params._id, (error, place) => {
// 		if (error) {
// 			next(error);
// 		} else {
// 			res.render('/edit', {place});
// 		}
// 	});
// });

// // POST 
// router.post('/:restaurant_id', (req, res, next) => {
// 	Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
// 		if (error) {
// 			next(error);
// 		} else {
// 			restaurant.name = req.body.name;
// 			restaurant.description = req.body.description;
// 			restaurant.save(error => {
// 				if (error) {
// 					next(error);
// 				} else {
// 					res.redirect(`/restaurants/${req.params.restaurant_id}`);
// 				}
// 			});
// 		}
// 	});
// });

//GET THE API DATA 

// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
	Place.find({}, (error, allPlaces) => {
		if (error) {
			next(error);
		} else {
			res.status(200).json({ places: allPlaces });
		}
	});
});


// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
		if (error) {
			next(error)
		} else {
			res.status(200).json({ restaurant: onePlaceFromDB });
		}
	});
});


module.exports = router