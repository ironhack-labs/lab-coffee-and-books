const express = require('express');
const Place = require('../models/Place');

const router = express.Router();

router.get('/places'), (req, res, next) => {
  Place.find()
    .then((places) => {
      res.render('/', { places: places })
    })
}

router.get('/places', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    });
});

router.get('/new', (req, res, next) => {
  res.render('placeAdd');
});

router.post('/new', (req, res, next) => {
  const { name, lat, lng, type, } = req.body;
  const newPlace = new Place({
    name,
    type,
    location: {
      coordinates: [lng, lat],
      type: 'Point',
    },
  });
  newPlace.save()
    .then((place) => {
      console.log('Place created');
      res.redirect('/');
    })
    .catch(error => next(error));
});

// router.get("/:id/detail", (req, res) => {
//   Place.findById(req.params.id)
//     .then(thisPlace => {
//       res.render("detail", {
//         thisPlace
//       })
//     })
//     .catch(err => console.log(err))
// })

// router.post("/:id/detail", (req, res) => {
//   Place.findByIdAndUpdate(req.params.id, {
//     name: req.body.name,
//     type: req.body.type,
//     location: {
//       coordinates: [req.body.lng, req.body.lat],
//       type: 'Point',
//     }
//   }, {
//     new: true
//   }).then(updateMyPlace => {
//     res.redirect("/")
//   }).catch((err) => console.log(err))
// });

// router.post("/:id/delete", (req, res) => {
//   Place.findByIdAndDelete(req.params.id).then(() => {
//     res.redirect("/");
//   }).catch((err) => console.log(err))
// })



module.exports = router;


