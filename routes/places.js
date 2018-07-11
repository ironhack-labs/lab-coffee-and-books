const express = require('express');
const router  = express.Router();

const Place = require('../models/place.js')

router.get('/', (req, res, next) => {
  Place.find({}).then(
    places => {
      res.render('places/list', {active: 'places', places})
    })
})


router.get('/add', (req, res, next) => {
  res.render('places/add', {active: 'add'})
})

//Post new place
router.post('/', (req, res, next) => {
  const {name, description, kind, latitude, longitude} = req.body;
  new Place({
    name,
    description,
    kind,
    location: {
      type: 'Point',
      coordinates: [latitude, longitude]
    }
  })
  .save().then( () => {
    res.redirect('/places');
  })
})


router.get('/:id/delete',(req,res) => {
  Place.findByIdAndRemove(req.params.id, () => res.redirect('/places'));
})

module.exports = router
