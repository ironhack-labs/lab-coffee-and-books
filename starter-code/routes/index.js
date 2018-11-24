const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then(places => {
    
    const allplaces = places.map(place => {
      return {
        _id: place._id,
        name: place.name,
        type: place.type
      }
    })

    console.log(allplaces);

    res.render('index',{
      places: allplaces
    });
  })
});

module.exports = router;
