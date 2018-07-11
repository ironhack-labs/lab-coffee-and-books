const express = require('express');
const router  = express.Router();
const Place = require ("../models/Place")

/* GET home page */


router.get('/', (req, res, next) => {
    Place.find({}).then( places => {
      console.log(places)
      res.render('index',{places:JSON.stringify(places)});
    })
  });

  router.get('/new', (req, res, next) => {
      res.render('new');
    });

  router.post((req, res, next) => {
    // Get Params from POST
    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    };
  
    //
      const newPlace = {
        name:        req.body.name,
        type:        req.body.type,
        location:    req.body.location,
      };
  
   
    Place.save((error) => {
      if (error) { console.log(error) }
      else {
        res.redirect('/');
      }
    })
  });
  


module.exports = router;
