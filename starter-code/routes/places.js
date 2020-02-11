const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')


// Listado de lugares
router.get('/list', (req, res) => {

  Place.find()
    .then(onePlace => res.render('places/list', { places: onePlace }))
    .catch(err => console.log("Error al consultar los lugares en la BBDD: ", err))
})

// Alta nuevo lugar
router.get('/add', (req, res) => res.render('places/new')
)
router.post('/add', (req, res) => {


  const { name, type} = req.body

  Place.create({ name, type})
    .then(() => {

      res.redirect('list')
    })
    .catch(err => console.log(err))
})

// // Consulta de los datos de una celebridad
// router.get('/:id', (req, res) => {

//   const celebrityId = req.params.id

//   Celebrity.findById(celebrityId)
//     .then(celebrityDetails => res.render('celebrities/show', celebrityDetails))
//     .catch(err => console.log("Error consultadno el libro en la BBDD: ", err))
// })

// // Eliminar celebridad
// router.post('/:id/delete', (req, res) => {
//   const celebrityId = req.params.id

//   Celebrity.findByIdAndRemove(celebrityId)
//     .then(() => res.redirect('/celebrities/list'))
//     .catch(err => console.log(err))
// })

// // Editar una celebridad
// router.get('/:id/edit', (req, res) => {

//   const celebrityId = req.query.celebrityId

//   Book.findById(celebrityId)
//     .then(editedCelebrity => res.render('celebrities/edit', editedCelebrity))
//     .catch(err => console.log(err))
// })
// router.post('/:id/edit', (req, res) => {
//   console.log("EL Id de la celebridad es:", req.params.celebrityId)
//   const celebrityId = req.params.celebrityId

//   // Retorna el objeto actualizado:
//   // Book.findByIdAndUpdate(bookId, req.body, {new: true}) 

//   Book.findByIdAndUpdate(celebrityId, req.body)
//     .then(x => res.redirect(`celebrities/show/${celebrityId}`))
//     .catch(err => console.log(err))
// })


module.exports = router