const express = require('express');
const Place = require('../models/places');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then(Place => {
    console.log(Place);
    res.render('index', {
      places: JSON.stringify(Place)
    });
  })
});

router.get('/add', (req, res, next) => {
  res.render('add');
});

router.post('/add', (req, res, next) => {
  const {
    name,
    kind,
    description,
  } = req.body;

  const location = {
    type: "Point",
    coordinates: [req.body.latitude, req.body.longitude]
  }

  console.log(req.body)
  Place.findOne({
      name
    })
    .then(place => {
      if (place !== null) {
        throw new Error("Username Already exists");
      }


      const newplace = new Place({
        name,
        kind,
        description,
        location
      });

      return newplace.save()
    })
    .then(place => {
      res.redirect("/add");
    })
    .catch(err => {
      console.log(err);
      res.render("/add", {
        errorMessage: err.message
      });
    })
})


module.exports = router;