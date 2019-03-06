const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')


/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

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

  const {name, type, latitude, longitude} = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  const newPlace = new Place({
    name,
    type,
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



