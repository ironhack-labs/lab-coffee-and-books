// index.js
const express = require('express');
const router  = express.Router();
const Place = require("../models/Place");

router.get('/', (req,res, next) => {
  Place.find((err, places) => {
    if (err) return next(err);
    res.render("index", { places });
  });

})
router.get('/markers', (req,res, next) => {
  Place.find((err, places) => {
    if (err) return next(err);
    res.json(places);
  });

})

router.post('/',(req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const place = new Place( {
      name:        req.body.name,
      type:        req.body.type,
      description: req.body.description,
      location:    location
    });

  // Save the restaurant to the Database
  place.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

router.post('/delete/:id',(req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      next();
      return err;
    });
})

module.exports = router;