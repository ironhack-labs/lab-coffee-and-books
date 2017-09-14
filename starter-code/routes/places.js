const express = require('express');
const router  = express.Router();
const Place = require("../models/place");

router.post('/', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

    const newPlace = new Place ({
      name:        req.body.name,
      category:    req.body.category,
      location:    location
    });

  newPlace.save((error) => {
    if (error) {
      console.log(error);
    }
    else {
      res.redirect('/');
    }
  });
});

module.exports = router;
