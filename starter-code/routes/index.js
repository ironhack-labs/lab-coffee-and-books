const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const { name, type } = req.body;
  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const newPlace = new Place({
    name,
    type,
    location: location,
  });
  newPlace.save()
    .then(place => {
      console.log(place)    
      res.redirect('/')
    })
    .catch(err => console.log(err));
});

router.get('/api', (req,res) => {
  Place.find()
  .then(place => {
    res.json(place)
  })
  .catch(err => console.log(err))
})

router.post('/delete', (req,res) => {
  const { name } = req.body
  Place.findOneAndDelete( { "name": name } )
  .then(place => {
    res.redirect('/')
  })
  .catch(err => console.log(err))
})

module.exports = router;
