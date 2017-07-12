const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

/* GET home page. */
router.route('/')
      .get((req, res, next) => {
        res.render('index');
      })
      .post((req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };


    const newPlace = new Place({
      name:        req.body.name,
      store: req.body.store,
      location:    location
    });


  newPlace.save((error) => {
    if (error) { console.log(error); }
    else {
      console.log('new place created');
      res.redirect('/');
    }
  });
});


module.exports = router;
