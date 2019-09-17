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

router.get('/edit/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(places => {
      console.log(places)
      res.render("edit", {places})})
    .catch(err=> console.log(err))
})

router.post("/edit/:id", (req,res,next) => {
  
  Place.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(() => res.redirect('/list'))
    .catch(err => console.log(err))
  })

router.get('/delete/:id', async (req, res, next) => {
  const { id } = req.params
  await Place.findByIdAndDelete(id)
  res.redirect('/map')
})

module.exports = router;