const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');
 /* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
 router.get('/new', (req,res)=>{
  res.render('places/newPlace');
})
 router.post('/new', (req,res)=>{
  Place.create(req.body)
  .then(place=>{
    res.redirect('/placesList')
  })
  .catch(err=>res.send(err))
})
 router.get('/placeslist', (req,res)=>{
  Place.find()
  .then(results=>{
    res.render('places/placesList', {results});
  })
  .catch(err=>res.send(err))
})
 router.get('/placeslist/:_id', (req,res)=>{
  let id = req.params.id;
  Place.findById(id)
  .then(result=>{
    res.render('placeDetail', result)
  })
})
 module.exports = router;