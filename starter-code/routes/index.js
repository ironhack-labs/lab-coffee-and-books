const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.post('/', (req, res, next) => {
  
  const place = new Place({name : req.body.name});

    
  Place.create(place)
  .then((place => {
    res.redirect('/placeList')
  }))

})

router.get('/placeList', (req, res, next) => {
  Place.find()
  .then(places => {
    res.render('showPlaceList', {places});
  })
  .catch(error => console.log(error))
})

router.post('/placeList/:id/delete', (req, res, next) => {
  let placeId = req.params.id;

  Place.findByIdAndRemove({'_id': placeId})
  .then(place => {
    res.redirect('/placeList');
    })
  .catch(error => console.log(error));
})










module.exports = router;
