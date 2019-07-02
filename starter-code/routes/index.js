const express = require('express');
const router  = express.Router();
const Place = require('../models/Places')



router.get('/places/new', (req, res, next) => {
  res.render('newplace');
});

router.post('/places/newplaces', (req, res, next) => {
  
  let location = {
    type: 'Point',
    coordinates: [+req.body.longitude, +req.body.latitude]
    };

	const newPlaces = new Place({
		name: req.body.name,
    type: req.body.type,
    location: location 
	});

	newPlaces.save((error) => {
		if (error) { 
			next(error); 
		} else { 
			res.redirect('/places');
		}
	});
});

// GET => to retrieve all the restaurants from the DB
router.get('/places', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('index', { places: placesFromDB });
		}
	});
});

// GET => get the form pre-filled with the details of one restaurant
router.get('/places/:id/edit', (req, res, next) => {
	Place.findById(req.params.id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('update', { place });
		}
	});
});

// POST => save updates in the database
router.post('/:id/edited', (req, res, next) => {

  // let lng = place.location.coordinates[0]
	Place.findById(req.params.id, (error, place) => {
    console.log(place.location.coordinates[0])
    console.log(typeof place.location.coordinates[0])

		if (error) { 
      next(error); 
    } else {
			place.name        = req.body.name;
      place.type = req.body.type;
      place.location = {
        type: 'Point',
        coordinates: [+req.body.longitude, +req.body.latitude]
        };
      // place.location.coordinates[0]  = +req.body.longitude;
      // place.location.coordinates[1]  = +req.body.latitude;
			place.save(error => {
				if (error) { 
					next(error); 
				} else { 
          res.redirect(`/places/${req.params.id}`); 
          console.log(req.body.longitude)
          console.log(typeof req.body.longitude)
				}
			});
		}
	});
});

// DELETE => remove the restaurant from the DB
router.get('/places/:id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.id }, function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});



// GET => get the details of one restaurant
router.get('/places/:id', (req, res, next) => {
	Place.findById(req.params.id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('show', { place: place });
		}
	});
});

router.get('/test', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.json({ places: placesFromDB });
		}
	});
});

module.exports = router;


