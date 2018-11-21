const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/place', (req, res, next) => {
  res.render('place');
});

router.get('/place/new', (req, res, next) => {
  res.render('new');
});

router.get('/place/edit', (req, res, next) => {
  res.render('edit');
});

router.get('/place/show', (req, res, next) => {
  res.render('show');

});
module.exports = router;

const place = require('../models/place');

// POST => to create new Place and save it to the DB
router.post('/', (req, res, next) => {

// add the location object
  let location = {
	type: 'Point',
	coordinates: [req.body.longitude, req.body.latitude]
  };
  
  const newPlace = new place({
	name:        req.body.name,
  type:        ["coffee shop", "bookstore"],
  timestamps:  req.body.timestamps,
	location:    location // <= add the location when creating a new Place
  });

  newPlace.save((error) => {
	if (error) { 
	  next(error); 
	} else { 
	  res.redirect('/');
	}
  })
});

module.exports = router;