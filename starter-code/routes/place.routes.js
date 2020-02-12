const express = require('express')
const router  = express.Router()
const Place = require('../models/place.model')

//Nombres de los famosos
router.get('/list', (req, res, next) => {

    Place.find()
    .then(allplaces => res.render('places/places-list',{place: allplaces}))
    .catch(err => console.log("Error consultando los famosos en la BBDD: ", err))
  })

// Borrado de famosos
router.post('/delete/:id' , (req,res) => {
  
  const placeId = req.params.id

  Place.findByIdAndDelete(placeId)
  .then(() => res.redirect('/list'))
  .catch(err => console.log("Error borrando el famoso en la BBDD: ", err))

})

//Detalles personales de famosos
router.get('/details/:id',(req, res) => {

  const placeId = req.params.id
  
  Place.findById(placeId)
    .then(theplace => res.render('places/places-details', theplace))
    .catch(err => console.log("Error consultando el famoso en la BBDD: ", err))
})

// Creación de famoso
router.get('/add', (req, res) => res.render('places/places-create'))
router.post('/add', (req, res) => {

  const { name, type , lat, long} = req.body

  Place.create({ name, type, lat, long})
    .then(() => res.redirect('/list'))
    .catch(err => console.log(err))
})

// Editar famoso
router.get('/edit', (req, res) => {

  const placeId = req.query.id

  Place.findById(placeId)
    .then(theplace => res.render('places/places-edit', theplace))
    .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res) => {
  
  const placeId = req.params.id

  console.log(placeId, req.body)
  
  Place.findByIdAndUpdate(placeId, req.body)
    .then(x => res.redirect(`/details/${placeId}`))
    .catch(err => console.log(err))
})

module.exports = router