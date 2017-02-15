var express = require('express');
var router = express.Router();
var multer  = require('multer');
const Place = require('../models/place');
/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find((error, placesSearch) => {
  	  	if (error) {
  	  		next(error);
  	  	} else {
  	  		res.render('index', { placesSearch,jsonPlace:JSON.stringify(placesSearch) });
  	  	}
  	  });
  	});

router.post('/', function(req, res, next) {
  let location = {
  			 type: 'Point',
  			 coordinates: [req.body.longitude, req.body.latitude]
  	 	};
      const newPlace = {
        name:        req.body.name,
        description: req.body.description,
        establileshmentType: req.body.placeList,
  			location
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

router.route('/new')
	.get((req, res, next) => {
		res.render('modelView/new');
	});


module.exports = router;
