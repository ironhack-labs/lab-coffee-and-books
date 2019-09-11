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
});

router.get('/new', (req, res, next) => {

    res.render('new',   {title:'Add CP'})
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
  const isBookstore=(place.type==='Bookstore')
  const isCoffeeshop=(place.type==='Coffe')
  place.isBookstore=isBookstore
  place.isCoffeeshop=isCoffeeshop
  place.title='Update CP'
  res.render('new', place)
})


router.get('/delete/:id', async (req, res, next) => {
  const { id } = req.params
  await Place.findByIdAndDelete(id)
  res.redirect('/map')
})

module.exports = router;