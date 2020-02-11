const express = require('express');
const router = express.Router();
const Places = require('../models/place.js');


/* GET home page */
router.get('/', (req, res) => res.render('index'))

router.get('/new', (req, res) => {
  Places.find()
    .then(allplaces => res.render('place/new', {
      place: allplaces
    }))
    .catch(err => console.log(err))
})

router.post('/new', (req, res, next) => {
  console.log(req.body.type)

  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const {
    name,
    type,
  } = req.body

  Places.create({
      name,
      type,
      location
    })
    .then(() => res.redirect('/new'))
    .catch(err => console.log(err))
});

router.get('/details/:id', (req, res) => {

  const placeId = req.params.id

  Places.findById(placeId)
    .then(place => res.render('place/details', place))
})


router.get('/delete/:id', (req, res) => {

  const placeId = req.params.id

  Places.findByIdAndRemove(placeId)
    .then(() => res.redirect('/new'))
    .catch(err => console.log(err))
})

router.get('/edit/:id', (req, res) => {

  const placeId = req.params.id

  Places.findById(placeId)
    .then(theplace => res.render('place/edit', theplace))
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {

  const placeId = req.params.id

  Places.findByIdAndUpdate(placeId, req.body)
    .then(() => res.redirect(`/details/${placeId}`))
    .catch(err => console.log(err))
})

router.get('/api', (req, res, next) => {
  Places.find()
    .then(allplacesFromDB => res.json(allplacesFromDB))
    .catch(err => next(err))
})


module.exports = router;