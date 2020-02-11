const express = require('express')
const router = express.Router()

const Places = require('../models/places.models')

//Create
router.get('/add', (req, res) => {
  res.render('./crud/add')
    .catch(err => console.log('Error en get /add ', err))
})

router.post('/add', (req, res) => {

  const { name, type, lat, lng } = req.body

  if (!name || !type || !lat || !lng)
  {
    res.render("./crud/add", { message: "Introduce bien los datos" })
    return
  }

  Places.findOne({ name: name })
    .then(place => {
      if (place)
      {
        res.render("./crud/add", { message: "Ese lugar ya existe en nuestra base de datos" })
        return
      }

      Places.create({ name, type, location: { coord: [lat, lng] } })
        .then(place => res.redirect("/crud/read"))
        .catch(err => console.log("Ha ocurrido un error en la creacion de un place: ", err))

    })

})

//Read

router.get('/read', (req, res) => {
  Places.find()
    .then(places => res.render('./crud/read', { places }))
})

router.get('/show/:id', (req, res) => {
  Places.findOne({ _id: req.params.id })
    .then(place => res.render('./crud/show', place))
    .catch(err => console.log("Error mostrando la vista show: ", err))
})

//Update

router.get('/update/:id', (req, res) => {
  Places.findById(req.params.id)
    .then(place => res.render('./crud/update', place))
    .catch(err => console.log("Se ha producido un error en el get de update: ", err))
})

router.post('/update/:id', (req, res) => {

  const { name, type, lat, lng } = req.body

  if (!name || !type || !lat || !lng)
  {
    res.render(`./crud/update/${id}`, { message: "Introduce bien los datos" })
    return
  }

  Places.findByIdAndUpdate(req.params.id, { name, type, location: { coord: [lat, lng] } })
    .then(x => res.redirect("/crud/read"))
    .catch(errr => console.log("Error al actualizar: ", err))
})

module.exports = router