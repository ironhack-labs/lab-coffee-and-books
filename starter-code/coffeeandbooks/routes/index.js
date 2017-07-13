const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/places', (req, res, next) => {
  res.render('places/show');
});

router.get('/places/new', (req, res, next) => {
  res.render('places/new');
});

router.post((req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    location: location
  }

  place.save((error) => {
    if(error) {console.log(error)}
    else {
      res.redirect('/places');
    }
  })
});

module.exports = router;
