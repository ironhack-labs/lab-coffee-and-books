const express = require('express');
const router = express.Router();
const Places = require('../models/place');

router.get('/create', (req, res, next) => {
  res.render('./places/add');
});

router.post('/create', (req, res, next) => {
  const { name, type } = req.body;

  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude],
  };


  const newPlace = new Places({
    name,
    type,
    location,
  });

  newPlace.save()
    .then((item) => {
      console.log(`${item} created`)
      res.redirect('/display');
    })
    .catch(err => console.log(`${err} fire! Fire!`));
});


router.get('/api', (req, res, next) => {
  Places.find()
    .then((shops) => {
      res.status(200).json({ shops });
    })
    .catch(error => console.log(error));
});

router.get('/display', (req, res, next) => {
  Places.find()
    .then((answer) => {
      res.render('./places/display', { answer, GMAPS: process.env.GMAPS });
    })
    .catch(err => console.log(`${err} fire! Fire!`));
});

router.get('/show/:id', (req, res, next) => {
  const find = req.params.id;
  Places.findById(find)
    .then((answer) => {
      res.render('./places/show', { answer, GMAPS: process.env.GMAPS });
    })
    .catch(err => console.log(`${err} fire! Fire!`));
});

router.get('/edit/:id', (req, res, next) => {
  const find = req.params.id;
  Places.findById(find)
    .then((answer) => {
      res.render('./places/edit', answer);
    })
    .catch(err => console.log(`${err} fire! Fire!`));
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, type, latitude, longitude } = req.body;

  const location = {
    type: 'Point',
    coordinates: [parseFloat(longitude), parseFloat(latitude)],
  }

  Places.update({ _id: id }, { $set: { name, type, location } })
    .then(() => {
      res.redirect('./display');
    })
    .catch(err => console.log(`${err} fire! Fire!`));
});

router.get('/delete/:id', (req, res, next) => {
  const find = req.params.id;
  Places.findByIdAndRemove(find)
    .then(() => {
      res.redirect('/display');
    })
    .catch(err => console.log(`${err} fire! Fire!`));
});


module.exports = router;
