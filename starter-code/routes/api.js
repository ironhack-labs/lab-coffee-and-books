var express = require('express');
var router = express.Router();
var Place = require('../models/place');




router.get('/', (req, res) => {
	  Place.find((error, places) => {
	  	if (error) {
	  		res.status(500).json({message: error});
	  	} else {
	  		res.status(200).json(places);
	  	}
	  })
	})


router.get('/search', (req, res) => {
		var latitude = req.query.lat;
		var longitude = req.query.lng;
		var maxDistance = req.query.dis;
		Place.where('location')
		.near({ center: { coordinates: [longitude, latitude], type: 'Point' }, maxDistance: maxDistance })
		.find((error, places) => {
			if (error) {
				res.status(500).json({message: error});
			} else {
				res.status(200).json(places);
			}
		});
	})

router.get('/:place_id', (req, res) => {
		Place.findById(req.params.place_id, (error, place) => {
			if (error) {
				res.status(500).json({message: error});
			} else {
				res.status(200).json(place);
			}
		})
	});



module.exports = router;