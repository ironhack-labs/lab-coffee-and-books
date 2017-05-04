var express = require('express');
var router = express.Router();
const Place = require('../models/place')

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    Place.find({}, (err, places) => {
      res.render('index', {places})
    })
  })

  .post((req, res, next) => {
    const newPlace = {
      name: req.body.name,
      address: req.body.address,
      location: { type: 'Point', coordinates: [req.body.longitude, req.body.latitude]},
  	  placeType: req.body.placeType
    }
    
    const place = new Place(newPlace);

    place.save(err => {
      res.redirect('/');
    })
    
  })

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.get('/api', (req, res, next) => {
  Place.find({}, (err, places) => {
      if(err) {
        res.status(500).json({message: err});
      } else {
        res.status(200).json(places);
      }
  })
});

router.route('/:id') 
  .get((req, res, next) => {
  Place.findOne({'_id': req.params.id}, (err, place) => {
    res.render('show', {place})
  })
  })

  .post((req, res, next) => {
    const editPlace = {
      name: req.body.name,
      address: req.body.address,
      location: { type: 'Point', coordinates: [req.body.longitude, req.body.latitude]},
  	  placeType: req.body.placeType
    }
    
    Place.findOneAndUpdate({'_id': req.params.id}, editPlace, (err, editPlace) => {
      res.redirect('/');
    })
    
  })



router.get('/:id/edit', (req, res, next) => {
  Place.findOne({'_id': req.params.id}, (err, place) => {
    res.render('edit', {place})
  })
});

router.get('/:id/delete', (req, res, next) => {
  Place.findOneAndRemove({'_id': req.params.id}, (err) => {
    res.redirect('/')
  })
});



module.exports = router;
