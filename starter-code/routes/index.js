const express = require('express');
const router  = express.Router();


const Place = require("../models/place");

/* GET home page */
router.get('/place', (req, res, next) => {
  res.render('index');
});

router.get('/place/new', (req, res, next) => {
  res.render('new');
});

router.post('/place', (req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
    };
    
    const newPlace = new Place({
      name:        req.body.name,
      type:        req.body.value,
      location:    location
    });
  
    newPlace.save((error) => {
      if (error) { 
        next(error); 
      } else { 
        console.log("Error al salvar")
        res.redirect('/place');
      }
    })
});

module.exports = router;
