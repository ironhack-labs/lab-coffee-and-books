const express = require('express');
const Place = require('../models/Place');
const router = express.Router();

//CREATE
router.get('/new', (req, res, next) => {
  const config = {
    action: `/places/new`,
    buttonTitle: 'Add'
  };

  res.render('places/new', config);
});
router.post('/new', (req, res, next) => {
  Place.create(req.body)
    .then(doc => {
      res.redirect(`/places/${doc._id}`);
    })
    .catch(err => res.send(err));
});

// READ
router.get('/', (req, res, next) => {
  Place.find()
    .then(docs => {
      res.render('places/listView.hbs', { places: docs });
    })
    .catch(err => res.send(err));
});
router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  Place.findById(id)
    .then(doc => {
      res.render('places/detailsView.hbs', { place: doc });
    })
    .catch(err => res.send(err));
});

//UPDATE
router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Place.findById(id)
    .then(doc => {
      const config = {
        action: `/places/${id}/edit`,
        buttonTitle: 'Edit',
        place: doc
      };

      res.render('places/new', config);
    })
    .catch(err => res.send(err));
});
router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Place.findByIdAndUpdate(id, { $set: req.body })
    .then(() => {
      res.redirect(`/places/${id}`);
    })
    .catch(err => res.send(err));
});

//DELETE
router.get('/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Place.findByIdAndRemove(id)
    .then(() => res.redirect('/places'))
    .catch(err => res.send(err));
});

module.exports = router;
