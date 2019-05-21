const express = require('express');
const router  = express.Router();
const Place = require('../models/place.models')
const bodyParser = require('body-parser')


/*
GET - CREAR NUEVOS PLACES - /BOOKS/CREATE
GET - EDITAR,BORRAR,LISTA - /BOOKS/LIST
GET - RAW DATA JSON       - /BOOKS/API
*/
router.get('/create', (req, res, next) => res.render('books/create'))

router.get('/list', (req, res, next) => {
  Place.find()
    .then( places => {
      res.render('books/list', { places: places})})
    }) 

router.get('/api', (req, res, next) => {
	Place.find({}, (error, allPlaces) => {
		if (error) {
			next(error);
		} else {
			res.status(200).json({ places: allPlaces });
		}
	});
});

router.post("/delete", (req, res, next) => {
  Place.findByIdAndDelete(req.body.delete)
    .then( x => res.redirect("/books/list"))
    .catch(err => next(err))
})

router.get("/:placeID/edit", (req, res, next) => {
  Place.findById(req.params.placeID)
    .then( place => res.render("books/edit", place))
    .catch(err => next(err))
})

router.post("/:placeID/edit", (req, res, next) => {
  Place.findById(req.params.placeID)
    .then( place => res.render("books/edit", place))
    .catch(err => next(err))
})


router.post('/create', (req, res, next) => {


	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};


	const newPlace = new Place({
		name: req.body.name,
    type: req.body.placeType,
    location
	})

  newPlace.save()
    .then( res.redirect("/books/list"))
		.catch(err => {next(err)})  
	})



module.exports = router;
