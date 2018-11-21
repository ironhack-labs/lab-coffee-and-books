const express = require('express');
const router = express.Router();
const Place = require('../models/Place.js');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find({})
    .then(places => {
      res.render('index', { places });
    })
    .catch(error => {
      console.log("Error to find " + error)
      res.redirect('/')
    })
});

router.get('/:_id', (req, res, next) => {
  Place.findById(req.params._id)
    .then(place => {
      res.render('placeid', { place });
    })
    .catch(error => {
      console.log("Error to find " + error)
      res.redirect('/')
    })
});

router.post('/new', (req, res, next) => {
  const genericPlace = new Place();
  genericPlace.name = req.body.name;
  genericPlace.type = req.body.type;
  genericPlace.save()
    .then(() => {
      res.redirect('/')
    })
    .catch(error => {
      console.log("Error to add a new place" + error)
    })
})

router.post('/:_id/update', (req, res, next) => {
  if (req.body.name === "" || req.body.type === "") {
    res.redirect('/')
  } else {
    placeEdited = {}
    placeEdited.name = req.body.name;
    placeEdited.type = req.body.type;
    Place.findByIdAndUpdate(req.params._id, placeEdited)
      .then(() => {
        res.redirect('/')
      })
      .catch(error => console.log("Error to update a place" + error))
  }

})

router.post('/:_id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params._id)
    .then(() => {
      res.redirect('/')
    })
    .catch(error => console.log("Error to remove a place" + error))
})

module.exports = router;
