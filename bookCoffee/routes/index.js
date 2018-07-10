const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then( places => {
    console.log({places, info: JSON.stringify(places)});
    res.render('index',{places, info: JSON.stringify(places)});
  })
});

router.get('/map/:id', (req, res, next) => {
    const mapId = req.params.id;
    Place.findById(mapId)
    .then( (place) => {
      console.log({place, info: JSON.stringify(place)});
      res.render('map',{place, info: JSON.stringify(place)});
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/delete/:id', (req, res, next) => {
  const mapId = req.params.id;
  Place.findOneAndRemove({_id: mapId})
  .then( place => {
    res.redirect('/');
  })
  .catch((err) => {
    console.log(err);
  })
})

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {
  const {name, type, lat, lng} = req.body;
  new Place({
    name, 
    type, 
    location: {
      type: 'Point',
      coordinates: [lat, lng]
    }
})
  .save().then( place => {
    console.log("Place sucessfully created!");
    res.redirect('/');
  });
});
module.exports = router;
