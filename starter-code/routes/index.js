const express = require('express');
const router = express.Router();
const Place = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET => render the form to create a new restaurant
router.get('/new', (req, res, next) => {
  console.log("ssddfdf")
  res.render('new');
});


router.get(':id', (req, res, next) => {
const id= req.params.id
  console.log('req.param')

  Place.findById(id)
    .then(onePlace => {
      res.render('show', onePlace);
    })
  .catch(err => console.log('err'))
});

router.get('/maps',(req, res, next) => {
  res.render('maps')
})
//POST => to create new restaurant and save it to the DB
router.post('/', (req, res, next) => {
  // add location object here
  let location = {
    type: 'Point',
    coordinates: [req.body.lat, req.body.lng]
  }
  
  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location: location
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

// GET => to retrieve all the restaurants from the DB
router.get('/', (req, res, next) => {
  res.render('index');
  Place.find({}, (error, placesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('/index', {
        places: placesFromDB
      });
    }
  });
});

// GET => get the form pre-filled with the details of one restaurant
router.get('/:place_id/edit', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('update', {
        place
      });
    }
  });
});

// POST => save updates in the database
router.post('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      place.name = req.body.name;
      place.location = req.body.type;
      place.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect(`/${req.params.place_id}`);
        }
      });
    }
  });
});

// // DELETE => remove the restaurant from the DB
router.get('/:place_id/delete', (req, res, next) => {
  Place.remove({
    _id: req.params.place_id
  }, function (error, place) {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});


// // to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
  Place.find({}, (error, allPlacesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({
        places: allPlacesFromDB
      });
    }
  });
});

// // to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
// router.get('/api/:id', (req, res, next) => {
//   let placeId = req.params.id;
//   Placet.findOne({
//     _id: placeId
//   }, (error, onePlaceFromDB) => {
//     if (error) {
//       next(error)
//     } else {
//       res.status(200).json({
//         place: onePlaceFromDB
//       });
//     }
//   });
// });

// GET => get the details of one restaurant
router.get('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      res.render('show', {
        place: place
      });
    }
  });
});





module.exports = router;
