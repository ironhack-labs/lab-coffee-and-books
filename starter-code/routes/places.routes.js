const router = require('express').Router()
const Place = require('../models/places')


// ------------------ GET ---------------------

router.get('/places/places', (req, res) => {
  Place.find()
  .then((getAllPlaces) => {
    res.render('places/places', {getAllPlaces})
  })
  .catch((err) => next(err));
})

router.get('/places/create-place', (req, res) => {
  res.render('places/create-place')
})


router.get('/places/:id/edit-place', (req, res) => {
  const {id} = req.params
  Place.findById(id)
  .then((updatedPlace) => {
    res.render('places/edit-place', updatedPlace)
  })
  .catch((err) => next(err));
})

router.get('/places/:id/delete-place', (req, res) => {
  const deleteThisId = req.params.id
  Place.findByIdAndDelete(deleteThisId)
  .then(() => {
    res.redirect('/places/places')

  })
  .catch((err) => next(err));
});

// ---------------------- POST -------------------

router.post('/places/create-place', (req, res) => {
  const {name, type, latitude, longitude} = req.body
  Place.create({name, type, latitude, longitude})
  .then(() =>{
    res.redirect('/places/places')
  })
  .catch((err) => next(err));
});

router.post('/places/:id/edit-place', (req, res) => {
  const updateThisId = req.params.id
  const {name, type, latitude, longitude} = req.body
  Place.findByIdAndUpdate(updateThisId , {name, type, latitude, longitude})
  .then(() => {
    res.redirect('/places/places')

  })
  .catch((err) => next(err));
  });


module.exports = router;
