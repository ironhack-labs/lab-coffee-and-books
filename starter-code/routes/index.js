/*jshint esversion: 6*/


var express = require('express');
var router = express.Router();
const Places = require('../models/places');

/* GET home page. */

router.route('/')
	.get((req, res, next) => {
		res.render("places/home")
	});

router.route('/books')
	.get((req, res, next) => {
	  Places.find({ type: "Library"}, (error, places) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('places/index', { places,jsonPlaces: JSON.stringify(places) });
	  	}
	  });
	})
  .post((req, res, next) => {

		let location = {
				type: 'Point',
				coordinates: [req.body.longitude, req.body.latitude]
};
    const newPlaces = {
      name: req.body.name,
      type: req.body.type,
			location
    };

  	const place = new Places(newPlaces);

  	place.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	});

  });

router.route('/coffes')
	.get((req, res, next) => {
	  Places.find({ type: "Coffe"}, (error, places) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('places/index', { places,jsonPlaces: JSON.stringify(places) });
	  	}
	  });
	})
  .post((req, res, next) => {

		let location = {
				type: 'Point',
				coordinates: [req.body.longitude, req.body.latitude]
};
    const newPlaces = {
      name: req.body.name,
      type: req.body.type,
			location
    };

  	const place = new Places(newPlaces);

  	place.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	});

  });


router.route('/new')
	.get((req, res, next) => {
		res.render('places/new');
	});

router.route('/:place_id')
	.get((req, res, next) => {
		Places.findById(req.params.place_id, (error, place) => {
			if (error) {
				next(error);
			} else {
				res.render('places/show', { place,jsonPlace: JSON.stringify(place) });
			}
		});
	})
	.post((req, res, next) => {
		Places.findById(req.params.place_id, (error, place) => {
			if (error) {
				next(error);
			} else {
				place.name        = req.body.name;
				place.type = req.body.type;
				place.save((error) => {
		  		if (error) {
		  			next(error);
		  		} else {
		  			res.redirect('/');
		  		}
		  	})
			}
		})
	});

router.route('/:place_id/edit')
	.get((req, res, next) => {
		Places.findById(req.params.place_id, (error, place) => {
			if (error) {
				next(error);
			} else {
				res.render('places/update', { place });
			}
		})
	});

router.route('/:place_id/delete')
	.get((req, res, next) => {
		Places.remove({ _id: req.params.place_id }, function(error, place) {
	    if (error) {
	    	next(error)
	    } else {
	    	res.redirect('/')
	    }
    });
	});
/*
	router.route('/:place_id')
		.get((req, res, next) => {
			Places.findById(req.params.place_id, (error, place) => {
				if (error) {
					next(error);
				} else {
					res.render('places/show', { place });
				}
			})
		});
*/
module.exports = router;
