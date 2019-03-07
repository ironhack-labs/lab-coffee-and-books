const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

router.get('/', (req, res, next) => {
  Place.find()
  .then(places => {

    console.log(places)

    res.render('index', {result: JSON.stringify(places)});
  })
  .catch(err => {
    console.log(err)
  })
  
});

// Listar por usuarios
router.get('/list', (req, res, next) => {

  Place.find()
  .then(places => {
    
    res.render('list', {places})
  })
})

// Borrar de la DB por ID
router.get("/delete/:id", (req, res, next) => {
  
  Place.findByIdAndDelete(req.params.id)
  .then(() => res.redirect("/list"))
  .catch(err => next(err))
})



// Editar/Actualizar campos por ID
router.get("/edit/:id", (req, res, next) => {

  Place.findById(req.params.id)
    .then(places => {
      console.log(places)
      res.render("edit", {places})})
    .catch(err=> console.log(err))

})

router.post("/edit/:id", (req,res,next) => {
  
  Place.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(() => res.redirect('/list'))
    .catch(err => console.log(err))
  })


// Crear nuevo punto
router.post('/in', (req, res, next) => {

  const {name, type, latitude, longitude} = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  const newPlace = new Place({
    name,
    type,
    location
  })

  newPlace.save(err => {
    if (err) {
      next(err)
    } else {
      res.redirect('/')
    }
  })

})

module.exports = router;
