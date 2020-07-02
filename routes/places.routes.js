
const express = require('express');
const router = express.Router();
const Place = require('../models/place');



// Endpoints
router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res, next) => {
   // console.log('charini')
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    let newPlace = {
        name: req.body.name,
        description: req.body.description,
        location
    }

    Place.create(newPlace)
        .then((res.redirect('/places/new')))
        .catch(err => next(err))

})



router.get('/', (req, res, next) => {
    Place.find()
      .then(allPlaces => {
        //console.log('allPlaces)
        res.render('places/all', { allPlaces })
      })
      .catch(err => next(err))
  });

  router.post('/delete/:id', (req, res, next) => {
    Place.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

  router.get('/edit/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(editPlace => res.render('places/edit', editPlace))
        .catch(err => next(err))
})


  router.get('/details/:id', (req, res, next) => {

    Place.findById(req.params.id)
        .then(place => res.render('places/details', place))
        .catch(err => next(err))
})

router.post('details/:id', (req, res, next) => {

  let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
  }
  const newPlace = {
      name: req.body.name,
      description: req.body.description,
      location
  }
  Place.findByIdAndUpdate(req.params.id, newPlace, { new: true })
      .then(updatePlace => {
          console.log(updatePlace)
          res.redirect(`/details/${updatePlace._id}`)
      })
      .catch(err => next(err))
})
module.exports = router
