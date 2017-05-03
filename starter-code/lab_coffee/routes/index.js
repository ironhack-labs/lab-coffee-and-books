/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page. */
router.route('/')
.get((req, res, next) => {
  Place.find({}, {"_id":0},(error, places) => {
    if (error) {
      next(error);
    }else {
      res.render('index', { title: 'Express' , places:places});
    }
  });
})
.post((req, res, next) => {
		let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

    const newPlace = {
      name:        req.body.name,
      description: req.body.description,
			location: location
    };

  	const place = new Place(newPlace);

  	place.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	});

  });




router.route('/:place_id')
	.get((req, res, next) => {
		Place.findById(req.params.place_id, (error, restaurant) => {
			if (error) {
				next(error);
			} else {
				res.render('restaurants/show', {restaurant});
			}
		});
	})
	.post((req, res, next) => {
		Place.findById(req.params.place_id, (error, restaurant) => {
			if (error) {
				next(error);
			} else {
				restaurant.name        = req.body.name;
				restaurant.description = req.body.description;
				restaurant.save((error) => {
		  		if (error) {
		  			next(error);
		  		} else {
		  			res.redirect('/');
		  		}
		  	});
			}
		});
	});

router.route('/:place_id/edit')
	.get((req, res, next) => {
		Place.findById(req.params.place_id, (error, restaurant) => {
			if (error) {
				next(error);
			} else {
				res.render('restaurants/update', { restaurant });
			}
		});
	});

router.route('/:place_id/delete')
	.get((req, res, next) => {
		Place.remove({ _id: req.params.place_id }, function(error, restaurant) {
	    if (error) {
	    	next(error);
	    } else {
	    	res.redirect('/');
	    }
    });
	});

module.exports = router;
