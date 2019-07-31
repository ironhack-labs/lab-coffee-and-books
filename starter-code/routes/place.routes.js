const express = require('express')
const router  = express.Router()

const Place = require('../models/Place.model')

router.get('/list', (req, res, next) => {
    Place.find({})
      .then(allThePlaces => {
        res.render('places-list', { place: allThePlaces })
        console.log(allThePlaces)
      })  // ojo! pasar obj
      .catch(err => console.log('Hubo un error:', err))
})

router.get('/create', (req, res, next) => res.render('places-add'))
router.post('/create', (req, res, next) => {

  const {name, type} = req.body

  Place.create({name, type  })
    .then(() => res.redirect('/place/list'))
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/edit', (req, res, next) => {
  //console.log(req.query)
  Place.findById(req.query.Id)
    .then(thePlace => res.render('places-edit', { thePlace }))
    .catch(err => console.log('Hubo un error:', err))
})
router.post('/edit', (req, res, next) => {

  const {name, type } = req.body

  // Todos los métodos de actualizar pueden recibir {new: true} como último argumento opcional, retornando el nuevo elemento y no el previo al update
  Place.findOneAndUpdate(req.query.placeId, { $set: { name, type  } }, { new: true })
    .then(theNewPlace => {
      res.redirect('/place/list')
    })
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/details/:id', (req, res, next) => {
  const placeId = req.params.id
  Place.findById(placeId)
    .then(placeInfo => {
      res.render('place-detail', { detail: placeInfo })
    })
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/remove/:id',(req,res,next) => {
  const place_id = req.params.id
  console.log(req.params.id)
  Place.findByIdAndRemove(place_id)
    .then(x => res.redirect('/place/list'))
    .catch(err => console.log('Hubo un error:', err))
  })


module.exports = router
