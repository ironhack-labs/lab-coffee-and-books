const express = require('express');
const router = express.Router();

const Place = require('./../models/place')

// READ

router.get('/places', (req, res, next) => {

  Place
    .find()
    .sort({ type: 1 })
    .then(allPlaces => res.render('places/list', { places: allPlaces }))
    .catch(error => console.log(error))

});

// CREATE
router.get("/places/create", (req, res, next) => {
  res.render('places/new-place')
})

router.post("/places/create", (req, res, next) => {

  const { name, type, longitude, latitude } = req.body
  const location = {
    type: 'point',
    coordinates: [longitude, latitude]
  }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch(error => console.log(error));

})

// EDIT
router.get("/places/:id/edit", (req, res, next) => {

  const { id } = req.params

  Place
    .findByIdAndUpdate(id)
    .then(place => res.render("places/edit-place", place))
    .catch(err => next(err))

})

router.post("/places/:id/edit", (req, res, next) => {

  const { name, type, longitude, latitude } = req.body
  const location = {
    type: 'point',
    coordinates: [longitude, latitude]
  }
  const { id } = req.params

  Place
    .findByIdAndUpdate(id, { name, type, location })
    .then(() => res.redirect(`/places`))
    .catch(err => next(err))
})

// DELETE
router.post('/places/:id/delete', (req, res, next) => {

  const { id } = req.params

  Place
    .findByIdAndDelete(id)
    .then(() => res.redirect(`/places`))
    .catch(err => console.log(err))
});


module.exports = router;
