const router = require('express').Router();
const Place = require('../models/Place');
const express = require('express');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET list page */
router.get('/places/list', (req,res)=>{
  // const coffee = req.body.placeType === 'Coffee Shop';
  Place.find()
    .then(places=>{
      res.render('places/list', {places})
    }).catch(e=>{
      console.log(e)
    })
})

/* add places */
router.get('/addPlace', (req,res)=>{
  res.render('places/addPlace')
})

router.post('/new', (req, res)=>{
    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    };
    const newPlace = new Place({
      name:        req.body.name,
      placeType: req.body.placeType,
      address:  req.body.address,
      location:    location
    });

    newPlace.save((error) => {
      if (error) { next(error) }
      else { res.redirect('places/list');
      }
    })

})

/* delete places */
router.post('/:id/delete', (req,res,next) => {
  Place.findByIdAndRemove(req.params.id)
  .then(results=>{
      res.redirect('places/list')
      })
  .catch(err=> next())

})

module.exports = router;
