const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then(places => {
    console.log(places)
    res.render('index', {
      places
    })
  })
})

router.get('/new', (req, res, next) => {
  res.render('new')
})

router.post('/new', async (req, res, next) => {
  let {
    lng,
    lat,
    name,
    address, 
    type
  } = req.body
  let place = {
    name,
    type, 
    address,
    location: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }
   await Place.create(place).then(() => {
    res.redirect('/')
  })
})

router.get('/edit/:id', async (req, res, next) => {
  const {id} = req.params
  const place = await Place.findById(id)
  res.render('edit', place)
})

router.post('/edit/:id', async (req, res, next) => {
  let {
    lng,
    lat,
    name,
    address,
    type
  } = req.body
  let place = {
    name,
    type,
    address,
    location: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }
  const {id} = req.params
  await Place.findByIdAndUpdate(id, place)
    res.redirect('/')
})

router.get('/delete/:id', async (req, res, next) => {
  const {id} = req.params
  await Place.findByIdAndDelete(id)
    res.redirect('/')
})

module.exports = router;
