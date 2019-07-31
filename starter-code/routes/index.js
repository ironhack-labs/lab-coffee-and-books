const express = require('express');
const router  = express.Router();


const Place = require('../models/place');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// POST => to create new restaurant and save it to the DB
router.post('/', (req, res, next) => {
  // add the location object
    let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
    };
    
    const newPlace = new Place({
    name:        req.body.name,
    description: req.body.description,
    location:    location // <= add the location when creating a new restaurant
    });
  
    newPlace.save((error) => {
    if (error) { 
      next(error); 
    } else { 
      res.redirect('/');
    }
    })
  });


  
  router.get('/new', (req, res, next) => res.render('places/new'))
  
  
  
  router.post('/', (req, res, next) => {
  
    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    }
  
    const newPlace = new Place({
      name: req.body.name,
      description: req.body.description,
      location
    });
  
    newPlace.save((error) => {
      if (error) {
        next(error);
      } else {
        res.redirect('/places');
      }
    });
  });
  
  
  
  
  
  
  router.get('/', (req, res, next) => {
    Place.find({}, (error, placesFromDB) => {
      if (error) {
        next(error);
      } else {
        res.render('places/index', { places: placesFromDB });
      }
    });
  });
  
  
  
  router.get('/api', (req, res, next) => {
    Place.find()
      .then(allPlaces => res.json(allPlaces))
      .catch(err => console.log('error', console.log(err)))
  })
  
  
  
  router.get('/:place_id', (req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
      if (error) {
        next(error);
      } else {
        res.render('places/show', { place: place });
      }
    });
  });
  
  
  router.get('/:place_id/edit', (req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
      if (error) {
        next(error);
      } else {
        res.render('places/update', { place });
      }
    });
  });
  
  
  
  router.post('/:place_id', (req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
      if (error) {
        next(error);
      } else {
        place.name = req.body.name;
        place.description = req.body.description;
        place.save(error => {
          if (error) {
            next(error);
          } else {
            res.redirect(`/places/${req.params.place_id}`);
          }
        });
      }
    });
  });
  
  
  
  router.get('/:place_id/delete', (req, res, next) => {
    Place.remove({ _id: req.params.place_id }, function (error, place) {
      if (error) {
        next(error);
      } else {
        res.redirect('/places');
      }
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  app.use('/', index);



module.exports = router;
