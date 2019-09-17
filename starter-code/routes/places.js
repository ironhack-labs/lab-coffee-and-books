const express       = require('express');
const placesRouter  = express.Router();
const Place         = require('../models/Place');


placesRouter.get('/places', (req, res, next) => {
  Place.find()
    .then(place => res.render('places/list', {place}))
    .catch(err => console.log('Place can not be found', err))
});

placesRouter.get('/placesmap', (req, res, next) => {
  Place.find()
    .then( (allPlaces) => {
      res.json(allPlaces);
  });
});

placesRouter.get('/edit', (req, res, next) => {
  Place.find()
    .then(place => res.render('places/modifie', {place}))
    .catch(err => console.log('Place can not be found', err))
});

placesRouter.get('/new', (req, res, next) => {
  res.render('places/new');
});

placesRouter.get('/places/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findById(placeId)
    .then(place => res.render('places/show', {place}))
    .catch(err => console.log('Invalid ID', err))
});

placesRouter.post('/new', (req, res, next) => {
  const { name, type, address, lng, lat } = req.body;

  if (name === '') {
    res.render('places/new', { message: 'Please indicate name and location' });
    return;
  }

  Place.findOne({ name })
    .then((place) => {
      if (place) {
        res.render('places/new', { message: 'name already exists'})
        return;
      }
     
      const newPlace = new Place ({
        name,
        type,
        address,
        location: {
          type: "Point",
          coordinates: [lng, lat]
        }
      });

      newPlace.save()
        .then(() => res.redirect('/places'))
        .catch(error => next(error))
    }) 
    .catch(error => next(error))
});

placesRouter.post("/edit/delete/:id", (req, res, next) => {
  const placeId = req.params.id;
  Place.findByIdAndRemove(placeId)
    .then(() => {
      console.log('Removed place');
      res.redirect("/edit");
    })
    .catch(err => {
      console.log("Couldn't delete this place, sorry" ,err);
      next();
    });
});

placesRouter.get('/edit/:id', (req, res, next) => {
  const placeId = req.params.id;
  Place.findById(placeId)
  .then(place => res.render('places/edit', {place}))
  .catch(err => console.log('Couldnt edit:', err))
})

placesRouter.post('/edit/:id', (req, res, next) => {
  const placeId = req.params.id;
  const { name, type, address, lng, lat } = req.body
  Place.findByIdAndUpdate(placeId, {$set: {
    name, type, address, location: { type: "Point", coordinates: [lng, lat] }
  }}, {new: true})
    .then(() => res.redirect('/edit'))
    .catch(err => console.log('Couldnt update:', err))
})


module.exports = placesRouter;

