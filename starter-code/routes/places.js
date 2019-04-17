const express = require('express');
const router  = express.Router();

const Place = require("../models/place");


router.get('/', (req, res, next) => {
  console.log('entra en el get');
  Place
    .find({})
    .then((placesData) => {
      //res.json(placesData)
      res.render('places', {placesData});
    }).catch((err)=>{
      console.log(err);
    });
});

router.get('/newPlaces', (req, res, next) => {
  res.render("newPlaces");
})

router.post('/newPlaces', (req, res, next) => {
  let name = req.body.name;
  let type = req.body.type;
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
    };
  // console.log(name, type, location);
  Place
    .create({
      name: name,
      type: type,
      location: location
    })
    .then(()=>{
      res.redirect('/places');
    })
    .catch((error) => console.log(error))
});


module.exports = router;