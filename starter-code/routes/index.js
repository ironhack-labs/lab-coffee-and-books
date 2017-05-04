/*jshint esversion: 6*/

var place = require('../models/place');
var user = require('../models/user');

const express = require('express');
const router  = express.Router();


/* GET home page. */
router.route('/')
	.get((req, res, next) => {
	  place.find({}).select('name description location -_id').exec((error, places) => {
	  	if (error) {
	  		next(error);
	  	} else {
				console.log("testetstets");
	  		res.render('places/index', { places });
	  	}
	  });

	})
  .post((req, res, next) => {
  	var place = new Place();
  	place.name = req.body.name;
  	place.location.type = 'Point';
  	place.location.coordinates = [req.body.longitude, req.body.latitude];
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
		Place.findById(req.params.place_id, (error, place) => {
			if (error) {
				next(error);
			} else {
				res.render('places/show', {place});
			}
		})
	})
	.post((req, res, next) => {
		Place.findById(req.params.place_id, (error, place) => {
			if (error) {
				next(error);
			} else {
				place.name = req.body.name;
				place.description = req.body.description;
				place.location.coordinates = [req.body.longitude, req.body.latitude];
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
		Place.findById(req.params.place_id, (error, place) => {
			if (error) {
				next(error);
			} else {
				res.render('places/update', { place });
			}
		})
	});

router.route('/:place_id/delete')
	.get((req, res, next) => {
		Place.remove({ _id: req.params.place_id }, function(error, place) {
	    if (error) {
	    	next(error)
	    } else {
	    	res.redirect('/')
	    }
    });
	});

module.exports = router;

// router.post((req, res, next) => {
//   // Get Params from POST
//   let location = {
//     type: 'Point',
//     coordinates: [req.body.longitude, req.body.latitude]
//   };
//
//   // Create a new bookshop with location
//     const newBookshop = {
//       name:        req.body.name,
//       description: req.body.description,
//       location:    location
//     };
//
//   // Save the bookshop to the Database
//   newBookshop.save((error) => {
//     if (error) { console.log(error); }
//     else {
//       res.redirect('/');
//     }
//   });
// });

// // Create a new coffeeshop with location
//   const newCoffeeshop = {
//     name:        req.body.name,
//     description: req.body.description,
//     location:    location
//   };
//
// // Save the coffeeshop to the Database
// newCoffeeshop.save((error) => {
//   if (error) { console.log(error); }
//   else {
//     res.redirect('/');
//   }
// });

// module.exports = router;
