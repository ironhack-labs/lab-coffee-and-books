const express = require('express');
const router = express.Router();
const Place = require('../models/place.model');

router.get('/', (req, res) => {
  Place.find()
    .then(allPlaces => res.render('places/list', {
      places: allPlaces
    }))
    .catch(err => console.log(err))
})

// GET => render the form to create a new restaurant
router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res, next) => {


  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const {
    name,
    type,

  } = req.body

  Place.create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch(err => console.log(err))

  // newPlace.save((error) => {
  //   if (error) {
  //     next(error);
  //   } else {
  //     res.redirect('/places');
  //   }
  // });
});

// // GET => to retrieve all the restaurants from the DB
// router.get('/', (req, res, next) => {
//   Place.find({}, (error, placesFromDB) => {
//     if (error) {
//       next(error);
//     } else {
//       res.render('places/list', { places: placesFromDB });
//     }
//   });
// });

// // GET => get the form pre-filled with the details of one restaurant
// router.get('/:place_id/edit', (req, res, next) => {
//   Restaurant.findById(req.params.place_id, (error, place) => {
//     if (error) {
//       next(error);
//     } else {
//       res.render('places/list', { place });
//     }
//   });
// });

// // POST => save updates in the database
// router.post('/:place_id', (req, res, next) => {
//   Place.findById(req.params.place_id, (error, place) => {
//     if (error) {
//       next(error);
//     } else {
//       place.name = req.body.name;
//       place.type = req.body.type;
//       place.save(error => {
//         if (error) {
//           next(error);
//         } else {
//           res.redirect(`/places/${req.params.restaurant_id}`);
//         }
//       });
//     }
//   });
// });

// // DELETE => remove the place from the DB
// router.get('/:place_id/delete', (req, res, next) => {
//   Place.remove({ _id: req.params.place_id }, function (error, place) {
//     if (error) {
//       next(error);
//     } else {
//       res.redirect('/places');
//     }
//   });
// });

router.get('/api', (req, res, next) => {
  Place.find()
    .then(allPlacesFromDB => res.json(allPlacesFromDB))
    .catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(thePlace => res.jason(thePlace))
    .catch(err => next(err))
})

module.exports = router;