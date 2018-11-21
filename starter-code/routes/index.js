const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
/* GET home page */
router.get('/', (req, res, next) => {
  Place.find({})
    .then((places) => {
      res.render('places/index', { places });
    }
    )
    .catch((err) => res.render('error', { error: err }));
});

router.get('/showPlaces', (req, res, next) => {
  Place.find({})
    .then((places) => {
      res.json({ places });
    }
    )
    .catch((err) => res.render('error', { error: err })
    );

  router.get('/create', (req, res, next) => {
    res.render('places/create');
  })
}
);

  router.post('/create', (req, res, next) => {
    let genericPlace = new Place();
    genericPlace.name = req.body.name;
    genericPlace.type = req.body.type;
    genericPlace.save()
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => res.render('error', { error: err }));
  });


  router.get('/edit/:id', (req, res, next) => {
    Place.findById(req.params.id)
      .then((place) => {
        res.render('places/edit', { place });
      }
      )
      .catch((err) => res.render('error', { error: err }));
  });

  router.post('/edit', (req, res, next) => {
    let newPlace = {
      name: req.body.name, type: req.body.type,
      location: { lat: req.body.latitude, lng: req.body.longitude }
    };
    Place.findByIdAndUpdate(req.body.id, newPlace)
      .then(() => {
        res.redirect("/");
      }
      )
    res.redirect(`/profile/${id}`);
  })

  router.post('/delete', (req, res, next) => {
    Place.findByIdAndRemove(req.body.id)
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => res.render('error', { error: err }));
  })

  router.get('/place/:id', (req, res, next) => {
    Place.findById(req.params.id)
      .then((place) => {
        res.render('places/place', { place });
      }
      )
      .catch((err) => res.render('error', { error: err }));
  });

  module.exports = router;
