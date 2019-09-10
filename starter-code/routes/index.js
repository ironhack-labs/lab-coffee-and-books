const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.redirect('/map');
});

router.get('/map', (req, res, next) => {
  Place.find().then(places => {
    console.log(places)
    res.render('map', { places })
  })
  //res.render('map');
});

router.get('/new', (req, res, next) => {

    res.render('new',   {title:'Create POI' })
})

router.post('/new', (req, res, next) => {
  let {lng, lat, name, type}=req.body
  let place={
    name, type, location: {
      coordinates: [lng,lat]
    }
  }
  Place.create(place).then(()=> {
    res.redirect('/map')
  })
})

router.get('/edit/:id', async (req, res, next) => {
  const { id } = req.params
  const place = await Place.findById(id)
  const isBookstore=(place.type==='BOOKS')
  const isCoffeeshop=(place.type==='COFFEE')
  place.isBookstore=isBookstore
  place.isCoffeeshop=isCoffeeshop
  place.title='Update POI'
  res.render('new', place)
})


router.get('/delete/:id', async (req, res, next) => {
  const { id } = req.params
  await Place.findByIdAndDelete(id)
  res.redirect('/map')
})

module.exports = router;
