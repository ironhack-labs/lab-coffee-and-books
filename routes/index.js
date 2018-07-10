const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');
const bodyParser = require('body-parser');


/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then( places => {
	console.log(places);
	res.render('index',{places},);
    res.render('index',{places:JSON.stringify(places)},);
  })
});


// SSSSS

router.post('/', (req, res, next) => {
	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};
	const newPlace = new Place({
		name:        req.body.name,
		description: req.body.description,
		location:    location
	});
	newPlace.save((error) => {
		if (error) { next(error) }
		else { res.redirect('/');
		}
	})
});



router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function(error, place) {
	if (error) {
		next(error)
	} else {
		res.redirect('/')
	}
});
});

module.exports = router;











module.exports = router;