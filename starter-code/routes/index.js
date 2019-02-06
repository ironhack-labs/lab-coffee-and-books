const express = require('express');
const router  = express.Router();
const Place   = require('../models/place')


router.get('/', (req, res, next) => {
  Place.find()
    .then(place =>{ res.render('index', { place }) })
    .catch(error => { console.log(error) }) 
});


router.get('/place/:id', (req, res, next) => {
 
  Place.findById(req.params.id)
    .then(place => {console.log(place);res.render('place', { place })})
    .catch(error => { console.log(error)})
})



router.post('/create',(req,res,next)=>{
console.log(req.body)
  const name = req.body.name
  const type = req.body.type

  const lng = req.body.lng
  const lat = req.body.lat

  const newPlace = {
    name: name,
    type: type,
    lng:  lng,
    lat:  lat,
  }


  
  Place.create(newPlace)
  .then(()=>{
    res.redirect('/');
  })
  .catch(() => {
    next(error);
  })
  
})


router.get('/create', (req, res, next) => {
  res.render('create');
});

//router.get('/create', (req, res, next) => {
//
//  Movie.find()
//    .then(movie =>{ res.render('movies', { movie }) })
//    .catch(error => { console.log(error) }) 
//})
//
//router.get('/read/:id', (req, res, next) => {
//
//  Movie.findById(req.params.id)
//    .then(movie => {res.render('movie', { movie })})
//    .catch(error => { console.log(error)})
//})
//
//


module.exports = router;

