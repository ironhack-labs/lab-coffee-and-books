const express = require('express');
const router = express.Router();

const Place = require('../models/place');

//Vista para crear un nuevo place
router.get('/new', (req, res, next) => {
  res.render('place/new');
})

//Crea la vista con el listado
router.get('/', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.render('index', { Place: allPlaces, allPlaces: JSON.stringify(allPlaces) })
    }).catch((err) => {
      console.log("espabilaaa")
    })
})

//Devuelve el nuevo Place creado
router.post('/', (req, res, next) => {
  const newPlace = new Place({
    name: req.body.name,
    type: req.body.type,
    location: { lat: req.body.lat, lng: req.body.lng }
  });
  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  })
});

//Borra el place
router.post('/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
});

//Crea la vista de editar
router.get('/:id/edit', (req, res, next) => {
  Place.findById(req.params.id).then(onePlace => {
    res.render('place/edit', { onePlace })
  });
});

//Coge los datos para actualizar
router.post('/:id', (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
});

//Muestra cada place
router.get('/:id', (req, res, next) => {
  Place.findById(req.params.id).then(onePlace => {
    res.render('place/show', onePlace)
  });
});

module.exports = router;