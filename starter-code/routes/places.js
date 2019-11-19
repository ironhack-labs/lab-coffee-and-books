const express = require('express');
const router = express.Router();
const places = require("../models/Places");

/* GET home page */
// router.get('/', (req, res, next) => {
//   places.find()
//     .then((placesFound) => {
//       res.render('/index', { placesFound })
//     })
// });

router.get('/:id', (req, res, next) => {
  places.findOne({ _id: req.params.id })
    .then((placeFound) => {
      res.render('places/show', placeFound)
    })
    .catch(() => {
      next()
    })

});

router.get('/:id/edit', (req, res, next) => {
  res.render('places/edit',place)
});

router.post('/:id', (req, res, next) => {
  places.updateOne(
    {_id: req.body.id},
    {
        name: req.body.name,
        type: req.body.type,
        pos:{lat: req.body.lat, lng: req.body.lng}
      }
    )
    .then(()=>{
      res.redirect('/')
    })

})

router.post('/:id/edit', (req, res, next) => {
  places.findOne({ _id: req.body.id })
    .then((place) => {
      res.render('places/edit', place)
    })
    .catch(() => {
      next()
    })
});

router.post('/:id/delete', (req, res, next) => {
  places.findByIdAndRemove(req.body.id)
    .then(() => {
      res.redirect('/')
    })
    .catch(() => {
      next()
    })
});


router.get('/new', (req, res, next) => {
  res.render('places/new')
});

router.post('/', (req, res, next) => {
  places.create({
    name: req.body.name,
    type: req.body.type,
    pos:{lat: req.body.lat, lng: req.body.lng}
  })
    .then(() => {
      res.redirect('/')
    })
});

module.exports = router;