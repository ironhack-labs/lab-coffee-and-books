const express = require('express');
const router = express.Router();
const Place = require("../models/place")

/* GET home page */
router.get('/', (req, res, next) => {
  const place = req.body
  Place.find()
    .then(allPlaces => {
      res.render('index', { place: allPlaces });
    })
    .catch(error => {
      console.log(error)
    })
})



/* POST a new place */
router.post('/', (req, res, next) => {

  // const { name, type, lat, lng } = req.body
  const place = {
    name: req.body.name,
    type: req.body.type,
    location: {
      lat: req.body.lat,
      lng: req.body.lng
    }
  }
  const newPlace = new Place(place)
  newPlace.save()
    .then(allPlaces => {
      console.log("nah")
      res.redirect("/")
    })
    .catch(error => {
      console.log(error)
    })
});

/* POST to DELETE */

router.post('/:id/delete', (req, res, next) => {
  Place.findOneAndDelete({ _id: req.params.id })
    .then(thePlace => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
    })
})


router.get('/api', (req, res, next) => {
  Place.find({}, (error, allPlaces) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ places: allPlaces });
    }
  });
});


module.exports = router;
