const express = require("express");
const router = express.Router();
const Place = require("../models/place.models");

// Endpoints
router.get("/", (req, res) => res.render("index"));
//Lo he subido aquí para que me vea la API
router.get('/api', (req, res, next) => {
	Place.find()
		.then(allPlaceFromDB => res.json({ places: allPlaceFromDB }))
		.catch(err => next(err))
});

//Create

router.get("/nueva", (req, res, next) => res.render("places/new"));
router.post("/nueva", (req, res, next) => {
  const { name, type } = req.body;
  const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }
  Place.create({ name, type,location })
    .then(() => res.redirect("/places"))

    .catch((err) => next(err));
});
// Read
router.get("/lista", (req, res, next) => {
  Place.find()
    .then((allPlaces) => res.render("places/list", { allPlaces }))
    .catch((err) => next(err));
});
// Update
router.get("/detalles/:id", (req, res, next) => {

    Place.findById(req.params.id)
    .then(place => res.render('places/update',{place}))
    .catch((err) => next(err));
});
router.post('/detalles/:id',(req,res,next) => {
    const {name,type} = req.body
    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }
    Place.findByIdAndUpdate(req.params.id,{name,type,location})
    .then(() => res.redirect(`/places/${req.params.id}`))
    .catch((err) => next(err));
})
//Delete
router.get('/:id', (req, res, next) => {
	Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect(`/places/lista`))
    .catch((err) => next(err));

});


router.get('/api/:id', (req, res, next) => {

	let placeId = req.params.id

	Place.findById(placeId)
		.then(onePlaceFromDB => res.json({ place: onePlaceFromDB }))
		.catch(err => next(err))
})


router.get('/:id', (req, res, next) => {
	Place.findById(req.params.id)
		.then(place => res.render('places/lista', { place: place }))
		.catch(err => next(err))
})


module.exports = router;
