const express = require('express');
const router = express.Router();
const places = require("../models/Places");

/* GET home page */
router.get('/', (req, res, next) => {
  places.find()
    .then((placesFound) => {
      res.render('places/index', { placesFound })
    })
});

router.get('/:id', (req, res, next) => {
  places.findOne({ _id: req.params.id })
    .then((movieFound) => {
      res.render('places/show', movieFound)
    })
    .catch(() => {
      next()
    })

});

router.get('/:id/edit', (req, res, next) => {
  res.render('places/edit',movie)
});

router.post('/:id', (req, res, next) => {
  places.updateOne(
    {_id: req.body.id},
    {
        name: req.body.name,
        type: req.body.type
      }
    )
    .then(()=>{
      res.redirect('/places')
    })

})

router.post('/:id/edit', (req, res, next) => {
  places.findOne({ _id: req.body.id })
    .then((movie) => {
      res.render('places/edit', movie)
    })
    .catch(() => {
      next()
    })
});

router.post('/:id/delete', (req, res, next) => {
  places.findByIdAndRemove(req.body.id)
    .then(() => {
      res.redirect('/places')
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
    type: req.body.type
  })
    .then(() => {
      res.redirect('/places')
    })
});

module.exports = router;