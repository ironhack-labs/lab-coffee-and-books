const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* C(R)UD: Retrieve -> List all places */
router.get('/', (req, res, next) => {
    Place.find()
      .then(places => {
        console.log(places)
        res.render("places/list", { places });
      })
      .catch(error => {
        console.log(error)
      })
  });

/* (C)RUD: Add a celebrity form */
router.get('/new', (req, res, next) => {
    res.render('places/new');
  });

/* (C)RUD: Create the place in DB */
router.post('/new', (req, res, next) => {
    const { name, description, kind, latitude, longitude } = req.body;
    new Place({ name, description, kind, location: { type: "Point", coordinates: [ latitude, longitude ]} })
    .save().then( place => {
      console.log("Place sucessfully created!");
      res.redirect('/places');
    });
  });

  module.exports = router;

/* C(R)UD: Retrieve -> Places details */
router.get('/:id', (req, res, next) => {
    let placeId = req.params.id;
    Place.findById(placeId)
      .then(place => {
        res.render("places/show", { place })
      })
      .catch(error => {
        console.log(error)
      })
  });

  /* CRU(D): Delete the place in DB */
router.get('/delete/:id',(req,res) => {
    Place.findByIdAndRemove(req.params.id, () => res.redirect('/places'));
  })
