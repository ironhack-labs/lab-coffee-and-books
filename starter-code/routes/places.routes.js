const express = require('express');
const router = express.Router();
const Place = require('../models/place.model.js')


/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then(places => {
      console.log(places)
      res.render('places/index', {
        places
      });
    })
    .catch(err => {
      next(err)
    })
});

router.get('/api', (req, res, next) => {
  Place.find()
    .then(places => {res.status(200).json(places)
    console.log('json',res.json(places))})
    .catch(err => {
      next(err)
    })
});


router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
    .then(place => {
      console.log(place)
      res.render('places/show', {
        place
      })
    })
})

router.post('/:id', (req, res) => {
  const {
   name,
   type,
   location
  } = req.body

  Place.findByIdAndUpdate(req.params.id, {
    name,
    type,
    location
    })
    .then(place => {
      console.log('place actualizado', place)
      res.redirect('/places')
    }).catch(err => {
      next(err)
    })
})

router.get('/add/new', (req, res) => res.render('places/new'))
router.post('/add/new', (req, res) => {
  const {
    name,
    type,
    location
  } = req.body

  //console.log(req.body)
  const newPlace = new Place({
    name,
    type,
    location
  })
  newPlace.save()
    .then(
      place => {
        res.redirect('/places')
      }
    )
    .catch(err => {
      res.render('places/new', {
        errmsg: "There was an error, try again"
      })
    })
})


router.get('/:id/delete', (req, res) => {
  Place.findByIdAndDelete(req.params.id)
    .then(place => {
      console.log(place)
      res.redirect('/places')
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})


router.get('/:id/edit', (req, res) => {
  Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', {
        place
      })
    })
})
module.exports = router;
