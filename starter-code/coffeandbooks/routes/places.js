const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('places');
});
router.post('/',(req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newPlace = {
      name:        req.body.name,
      kind: req.body.kind,
      location:    location
    };

  // Save the restaurant to the Database
  place.save((error) => {
    if (error) { console.log(error) ;}
    else {
      res.redirect('/');
    }
  });
});


module.exports = router;
