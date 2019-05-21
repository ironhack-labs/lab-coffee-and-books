const express = require('express');
const router = express.Router();


const Place = require('../models/place')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//añadir nuevo lugar
router.get('/add', (req, res) => res.render('places-add'))
router.post('/add', (req, res) => {
  const { name, type } = req.body
  const newPlace = new Place({ name, type })
  newPlace.save()
    .then(thePlace => res.redirect('/list'))
    .catch(error => console.log(error))
})

//listado de lugares

router.get('/list', (req, res, next) => {
  Place.find()
    .then(allPlaces => {
      res.render('places-list', { places: allPlaces })
    })
    .catch(error => console.log(error))
})


//detalles lugares

router.get('/detail/:place_id', (req, res) => {

  Place.findById(req.params.place_id)

    .then(thePlace => res.render('places-details', { place: thePlace }))
    .catch(error => console.log(error))
})


//borrar

router.post('/delete/:place_id', (req, res) => {
  Place.findByIdAndRemove(req.params.place_id)
    .then(thePlace => {
      res.redirect('/list')
    })
    .catch(error => console.log(error))
})


//editar
router.get('/edit/:place_id', (req, res) => {

  Place.findOne({ _id: req.params.place_id })
    .then(place => res.render("places-edit", { place }))
    .catch(error => console.log(error))
})

router.post('/edit/:place_id', (req, res) => {
  const { name, type } = req.body
  Place.findByIdAndUpdate({ _id: req.params.place_id }, { $set: { name, type } })
    .then(() => res.redirect('/list'))
    .catch(error => console.log(error))

})








module.exports = router;
