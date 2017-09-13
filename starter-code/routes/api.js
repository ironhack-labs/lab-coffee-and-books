var express = require('express');
var router = express.Router();
var Location = require('../models/place');



router.get('/', (req, res) => {
	  Location.find((error, restaurants) => {
	  	if (error) {
	  		res.status(500).json({message: error});
	  	} else {
	  		res.status(200).json(restaurants);
	  	}
	  })
	})


router.get('/search', (req, res) => {
		var latitude = req.query.lat;
		var longitude = req.query.lng;
		var maxDistance = req.query.dis;
		Location.where('location')
							.near({ center: { coordinates: [longitude, latitude], type: 'Point' }, maxDistance: maxDistance })
							.find((error, restaurants) => {
								if (error) {
									res.status(500).json({message: error});
								} else {
									res.status(200).json(restaurants);
								}
							});
	})

router.get('/:restaurant_id', (req, res) => {
		Location.findById(req.params.restaurant_id, (error, restaurant) => {
			if (error) {
				res.status(500).json({message: error});
			} else {
				res.status(200).json(restaurant);
			}
		})
	});



module.exports = router;
