const express = require('express');
const router = express.Router();
const Place = require('../models/Place')


//*********** */ALL ROUTES BEGINS WITH----> /place in this route***********

// List all Places
router.get('/', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.render('places/placeslist', {
        places
      });
    })
    .catch((error) => {
      console.log(`Error finding places ${error}`);
    })
});


router.get('/api', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.json( {places});
    })
    .catch((error) => {
      console.log(`Error finding places ${error}`);
    })
});

// Create New Place
router.get('/new', (req, res, next) => {
  res.render('places/newplace');
});

// Post New Place from Form Data
router.post('/new', (req, res, next) => {
  let place = {
    name: req.body.name,
    type: req.body.type,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.lat), Number(req.body.lng)]
    }
  }
  Place.create(place)
  .then((place)=>{
    console.log(place);
    res.redirect('/place')
  })
  .catch((error)=>{
    console.log(`Error creating place:${error}`)
  })
})



module.exports = router;