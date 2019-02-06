const express = require('express');
const router  = express.Router();
const Place = require('../models/place.js')

router.get('/', (req, res, next) => {
  Place.find()
  .then(places => res.render('places/places',{places}))
  .catch(err => console.log(err))
});
router.get('/new', (req,res,next) => {
  res.render('places/newPlace')
})
router.get('/update/:id', (req,res,next) => {
  Place.findById(req.params.id)
  .then(place => res.render('places/updatePlace',{place}))
  .catch(err => console.log(err))
})

router.post('/update/:id', (req,res,next) => {
  Place.findByIdAndUpdate(req.params.id,{name:req.body.name,type:req.body.type,location:{lat:+req.body.lat,lng:+req.body.lng}})
  .then(place => res.redirect('/places'))
  .catch(err => console.log(err))
})
router.post('/new', (req,res,next) => {
  Place.create({name:req.body.name,type:req.body.type,location:{lat:+req.body.lat,lng:+req.body.lng}})
  .then(() => res.redirect("/places"))
  .catch(err => console.log(err))
})
router.post('/:id', (req,res,next) => {
  Place.remove({_id:req.params.id})
  .then(() => res.redirect("/places"))
  .catch(err => console.log(err))
})

router.get('/find', (req, res, next) => {
  Place.find()
  .then(places => res.json(places))
  .catch(err => console.log(err))
});

module.exports = router;
