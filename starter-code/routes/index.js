const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");


/* READ - GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then(places => {
    // res.json(places);
    res.render('index', {places});
  })
});


/* DELETE item */
router.get("/delete/:id", (req, res, next) => {  
	Place.remove({ _id: req.params.id }, function (error, place) {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});

/* CREATE item */
router.get("/add", (req, res, next) => {
   res.render('add');
})


router.post('/', (req, res, next) => {
  const newPlace = new Place({
    name: req.body.name,
    business: req.body.business,
    location: { lat: req.body.lat, lng: req.body.lng }
  });
  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  })
});

/* EDIT ITEM */
//Esta me la salto de momoento

/* Poner los bares en los mapas */
router.get('/', (req, res, next) => {
  Place.find().select({lng:1, lat:1, name: 1, business: 1}).then(allPlaces => {
    res.render('/', {layout: false, allPlaces: JSON.stringify(allPlaces)});
  })
});

module.exports = router;


// -- 
//   CRUD
//   C - Create
//   R - Read    - OK
//   U - Update
//   D - Delete 
// --
  

