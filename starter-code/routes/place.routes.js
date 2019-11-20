const express = require('express');
const router = express.Router();
const Place = require('../models/place.model');

// GET => to retrieve all the restaurants from the DB
router.get('/', (req, res, next) => {
  Place.find({}, (error, placeFromDB) => {
    if (error) {
      next(error);
    } else {
      res.render('list', {
        place: placeFromDB
      });
    }
  });
});

// Manda el formulario para agregar un famoso
router.get('/add', (req, res) => res.render('newPlace'))

// Agregar un famoso
router.post('/add', (req, res) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }
  const {
    name,
    type
  } = req.body

  Place.create({
      name,
      type,
      location
    })
    .then(x => res.redirect('/place'))
    .catch(err => 'error: ' + err)
})



//mandar el formulario para editar un famoso
router.get('/edit', (req, res) => {
  const cellId = req.query.cellId
  Place.findById(cellId)
    .then(thePlace => res.render('editPlace', thePlace))
    .catch(err => console.log('error!!', err))
})

// Editar un famoso
router.post('/edit', (req, res) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }
  const {
    name,
    type,
  } = req.body
  const cellId = req.query.cellId
  Place.findByIdAndUpdate(cellId, {
      name,
      type,
      location
    })
    .then(res.redirect('/place'))
    .catch(err => console.log('error!!', err))

})

//eliminar un famoso por su id
router.get('/delete', (req, res) => {
  const cellId = req.query.cellId
  Place.findByIdAndRemove(cellId)
    .then(res.redirect('/place'))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


// to see raw data in your browser, just go on: http://localhost:3000/restaurants/api
router.get('/api', (req, res, next) => {
  Place.find()
    .then(placeFromDB => res.status(200).json({
      places: placeFromDB
    }))
    .catch(err => next(err))
});






// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id;
  Place.findOne({
    _id: placeId
  }, (error, placeFromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({
        place: placeFromDB
      });
    }
  });
});


module.exports = router;