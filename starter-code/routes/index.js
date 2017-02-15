/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page. */

router.route('/')
  .get((req, res, next) => {
    Place.find((error,place) => {
      if(error){
        next(error);
      }else{
        res.render('index',{
          // jsonLocals: place
          jsonLocals:JSON.stringify(place)
        });
      }
    });


})

  .post((req, res, next) => {
    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = {
    name: req.body.name,
    type: req.body.type,
    location: location
  };

  const place = new Place(newPlace);

  place.save((error) => {

    if(error){
      console.log(error);
      next(error);
    }else{
      console.log(error);
      res.redirect('/');
    }
  });
});






module.exports = router;




/*
/addPlace
/showPlace/:d




*/
