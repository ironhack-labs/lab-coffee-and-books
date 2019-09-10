const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/map', (req, res) => {
  Place.find().then( places => {
    res.render('map', {places});
  })
})

router.get('/new', (req, res) => {
  res.render('new', {action: '/new'})
})

router.post('/new', (req, res, next) => {
  let {lng, lat, name, address , type} = req.body
  let place = {
    name,
    address,
    type,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    }
  };
  Place.create(place).then(() => {
    res.redirect('/map');
  })
});

router.get('/delete/:id', async (req, res, next) => {
  const {id} = req.params
  await Place.findByIdAndDelete(id)
  res.redirect('/map')
})

router.get('/edit/:id', async (req, res) => {
  const {id} = req.params
  const place = await Place.findById(id)
  place.action = `/edit/${id}`
  res.render('new', place)
})

router.post('/edit/:id', async (req, res) => {
  const {id} = req.params
  const {lng, lat, name, address , type} = req.body
  let place = {
    name,
    address,
    type,
    location: {
      type: "Point",
      coordinates: [lng, lat]
    }
  };
  Place.findByIdAndUpdate(id, place).then(() => {
    res.redirect('/map');
  })
})

module.exports = router;