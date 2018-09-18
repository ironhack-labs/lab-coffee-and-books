const express = require('express');
const router  = express.Router();

const Place = require('../models/Place');

router.get('/list', (req, res, next) => {
  Place.find()
  .then (places => {
    res.render("places/list", {
      places,
      placesToString: JSON.stringify(places)
    });
  }).catch(e => next(e));
});

router.get('/new', (req, res, next) => {
  res.render("places/new");
});

router.post('/new', (req, res, next) => {
  let {kind, name} = req.body;
  let location = {
    type: "Point",
    coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
  }
  new Place({kind, name, location})
  .save()
  .then(() => {
    res.redirect('/places/new');
  })
  .catch(e=> next(e));
})

module.exports = router;