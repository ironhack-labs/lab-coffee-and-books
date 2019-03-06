const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {

  Place.find()
  .then(places => {
    res.render('index', {result: JSON.stringify(places)});
  })
  .catch(err => {
    console.log(err)
  })
  
});

router.post('/places', (req, res, next) => {

  const {name, description, latitude, longitude} = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  const newPlace = new Place({
    name,
    description,
    location
  })

  newPlace.save(err => {
    if (err) {
      next(err)
    } else {
      res.redirect('/')
    }
  })

})

module.exports = router;
