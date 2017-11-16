const express = require('express');
const router = express.Router();
const Place = require ('../models/place')


router.get('/',(req, res, next) => {
  Place.find((error, place) => {
    if (error) { next(error); }
    else {
      res.render('place/index', { place });
    }
  })
})

router.get('/new', function(req, res, next) {
  res.render('place/newplace');
});

router.post('/new', function(req, res, next) {
  let name = req.body.name;
  let kind = req.body.kind;
  let location = {
   type: 'Point',
   coordinates: [req.body.longitude, req.body.latitude]
 };

  let newPlace = new Place({
    name,
    kind,
    location,
  });
  newPlace.save(function (err) {
    if (err) return handleError(err);
    return res.redirect('/place')
  })
});

router.get('/map/:id', function(req, res, next) {
  console.log("Dentro")
    let id = req.params.id;
    Place.find({'_id': id}, (err, place) => {
      console.log(place)
      return res.render('place/map', {place})
    })

});

module.exports = router;
