const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//CREATE
router.get('/create', (req, res, next) => {
  res.render('create');
});

router.post('/create', (req, res, next) => {

  let place = {
    name: req.body.name,
    type: req.body.placeSelected,
  }
  console.log(place);
  Place.create(place).then( place => {
    res.redirect('/list');
  }).catch(e=> next(e));
});

//LIST ALL PLACES
router.get('/list', (req, res, next) => {
	Place.find({},(error, placesFromDB) => {
		if (error) { 
			next(error); 
		} else { 
			res.render('list', { places: placesFromDB });
		}
	});
});

//DELETE PLACES
router.post("/list/:id/delete", (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/list"))
    .catch(error => next(error));
 });
module.exports = router;
