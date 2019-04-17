const express = require('express');
const router  = express.Router();
//
const Place = require('../models/place');

router.get('/findplaces', (req, res, next) => {
  Place.find({})
  .then((places)=>{
    res.json(places);
  })
  .catch((err)=>{
    console.log(err);
  })
} );

router.get('/', (req, res, next) => {
  Place.find({})
  .then((places)=>{
    //res.json(places);
    res.render('places/index', {places});
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get('/new', (req, res, next) => {
  const data = {
    action: "new"
  }
  res.render('places/new', data);
});

router.post('/', (req, res, next) => {  
  const { name, type, lat, lng} = req.body;
  const newPlace = new Place({ name, type, lat, lng })
  newPlace.save()
    .then((place) => {
      res.redirect('/places');
    })
    .catch((error) => {
      console.log(error);
    })

});

router.get('/:placeId', (req, res, next) => {
  var id = req.params.placeId;
  Place.findById(id)
  .then((place)=>{
    res.render('places/show', place);
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.post('/:placeId/delete', (req, res, next) => {
  var id = req.params.placeId;
  console.log(id);
  Place.findByIdAndRemove(id)
  .then((place)=>{
    res.redirect('/places');
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get('/:placeId/edit', (req, res, next) => {
  var id = req.params.placeId;
  Place.findById(id)
  .then((place)=>{
    // res.json(place);
    res.render('places/edit', {place});
  })
  .catch(next)
});


router.post('/:id/update' , (req, res, next) =>{
  console.log(req.body);
  const {_id, name, type, lat, lng} = req.body ;
  console.log(`${_id}, ${name}, ${type}, ${lat}, ${lng}`);
  Place.findByIdAndUpdate(_id, req.body , {new: true})
  .then((place)=>{
    res.redirect('/places');
  })
  .catch(next)
});

module.exports = router;