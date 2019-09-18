const express = require("express");
const Place = require("../models/Place");
const router = express.Router();
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const path         = require('path');

// require('./configs/db.config');

router.get("/api", (req, res, next) => {
  Place.find().then(allPlaces => {
    res.json(allPlaces);
  });
});

router.get('/', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('places/index', { places: placesFromDB });
		}
	});
});

router.get("/new", (req, res, next) => {
  res.render("places/new");
});

router.post("/new", (req, res, next) => {
  const { name, type, description, lat, lng } = req.body;

  console.log(name, type, description, lat, lng)

  const place = new Place({
    name,
    type,
    description,
    location: {
      coordinates: [lng, lat],
      type: "Point"
    }
  });

  console.log(place)

  place
    .save()
    .then(ok => {
      console.log("Place created");
      res.redirect("/places");
    })
    .catch(error => next(error));
});

router.get('/:place_id/edit', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/update', { place });
		}
	});
});


// POST => save updates in the database
router.post('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) { 
      next(error); 
    } else {
			place.name        = req.body.name;
			place.description = req.body.description;
			place.save(error => {
				if (error) { 
					next(error); 
				} else { 
					res.redirect(`/places/${req.params.place_id}`); 
				}
			});
		}
	});
});

// DELETE => remove the place from the DB
router.get('/:place_id/delete', (req, res, next) => {
	Place.remove({ _id: req.params.place_id }, function(error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/places');
		}
	});
});

// GET => get the details of one place
router.get('/:place_id', (req, res, next) => {
	Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			res.render('places/show', { place: place });
		}
	});
});

module.exports = router;
