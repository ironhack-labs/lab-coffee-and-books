const express = require('express');
const router  = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/placesMap', (req,res)=>{
  let apikey = process.env.APIKEY
  res.render('map', {apikey: apikey})
});

router.get('/places', (req,res)=>{
  Place.find()
    .then(places => res.json (places));
});

router.get('/add', (req, res) =>{
  res.render('form', {route: 'add'})
});

router.get('/update/:id', (req, res) =>{
  Place.findOne({_id: req.params.id})
    .then(place =>{
      place.type === 'coffee shop' ? 
      res.render('form',{place, route: 'update' }):
      res.render('form',{place, route: 'update',  option:1 });
    })
});

router.get('/remove/:id', (req, res) =>{
  Place.findByIdAndDelete({_id: req.params.id})
  .then(res.redirect('/'))
});

router.post('/add', (req, res) =>{
  if (req.body.long < -180 || req.body.long > 180) {
    res.status(500).json({error: true, "reason" : "Longitude is wrong"})
  }
  if (req.body.lat < -90 || req.body.lat > 90) {
    res.status(500).json({error: true, "reason" : "Latitude is wrong"})
  }
  Place.create({
    name: req.body.name,
    type: req.body.type,
    long: req.body.long,
    lat: req.body.lat
  })
    .then(res.redirect('/'))
});

router.post('/update', (req, res) =>{
  Place.findByIdAndUpdate({_id: req.body._id}, req.body, {new: true})
  .then((place) => {
    res.redirect("/")
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
