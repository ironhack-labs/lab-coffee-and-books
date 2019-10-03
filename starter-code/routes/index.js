const express = require('express');
const router  = express.Router();
const Place = require('../models/place')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/places/api', (req, res, next) => {
  Place.find()
    .then(places => {
      res.json(places)
    })
    .catch(err => console.log("Ocorreu um erro acessar os places:",err))
 
});

router.get('/places', (req, res, next) => {
  Place.find()
    .then(places => {
      res.render('places',places);
    })
    .catch(err => console.log("Ocorreu um erro acessar os places:",err))
 
});
router.post('/places/edit', (req, res, next) => {
  let { name, latitude, longitude } = req.body;
  let location = {
    type: 'Point',
    coordinates: [longitude, latitude]
    };
    console.log("NAME:",name)
  Place.findOneAndUpdate({ name } , location )
    .then(response => {
      console.log("Place atualizado com sucesso",response);
      res.render('places');
    })
    .catch(err => console.log("Ocorreu um erro atualizar place:",err))
 
});

router.get('/places/remove/:id', (req, res, next) => {
  let { id } = req.body.id;
  Place.findOneAndDelete(id)
    .then(response => {
      console.log("Place apagado com sucesso");
      res.render('places',places);
    })
    .catch(err => console.log("Ocorreu um erro ao apagar o place:",err))
 
});

router.post('/places/add', (req, res, next) => {
  let { name, type, longitude, latitude} = req.body;
  let location = {
    type: 'Point',
    coordinates: [longitude, latitude]
    };
  const newPlace = new Place({
    name:        name,
    type: type,
    location:    location 
  });
  newPlace.save((error) => {
    if (error) { 
      next(error); 
    } else { 
      res.redirect('/places');
    }
  })
});


module.exports = router;
