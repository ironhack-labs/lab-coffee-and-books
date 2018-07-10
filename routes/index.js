const express = require('express');
const router  = express.Router();
const Places = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Places.find({}).then( places => {
    console.log(places)
    res.render('index',{myPlaces:JSON.stringify(places), places});
  })
});

router.post('/newPlace', (req, res, next) => {
  const location ={
    type: 'Point',
    coordinates: [Number(req.body.lat), Number(req.body.lng)]
}
  const {
    name,
    description,
    kindOfPlace,
  } = req.body;

  Places.findOne({
      name
    })
    .then(place=> {
      if (place!== null) {
        throw new Error('This place already exists');
      }

      const newPlace = new Places({
        name,
        description,
        kindOfPlace,
        location
      })
      return newPlace.save()
    })
    .then(place=> {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
      Place.find().then(places => {
        res.render('index', {places: JSON.stringify(places), places});
      });
    })
})

router.get('/delete/:id',(req,res) => {
  Places.findByIdAndRemove(req.params.id, () => res.redirect('/'));
})

module.exports = router;
