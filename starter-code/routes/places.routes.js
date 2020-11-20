const express = require('express')
const router = express.Router()
const Places = require('../models/place.model')


router.get('/', (req, res) => {

  Places
    .find()
    .then(data => res.render("./places.hbs", { data }))
  .catch(err => console.log(err))

})

router.get('/crear', (req, res) => {

  res.render('./places-form.hbs')

})

router.post('/crear', (req, res) => {
  let name = req.body.name
  let type = req.body.type
  let coordinates = [req.body.lat, req.body.lon]
  Places
    .create({
      name,
      type,
      location:{
        type: 'Point',
        coordinates
      }
  })
    .then(res.redirect('/sitios'))
    .catch(err => console.log(err))
})

  router.get('/editar/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
  Places
    .findById(id)
    .then(data => res.render('./edit-form', { data }))
    .catch(err => console.log(err))


})
    router.post('/editar/:id', (req, res) => {
      const id = req.params.id
        let name = req.body.name
  let type = req.body.type
  let coordinates = [req.body.lat, req.body.lon]
    console.log(id)
  Places
    .findByIdAndUpdate(id, {
      name,
      type,
      location: {
        type: 'Point',
        coordinates
      }
    }, { new: true })
    .then(data => res.render('./edit-form', { data }))
    .catch(err => console.log(err))


})
    router.get('/eliminar/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
  Places
    .findByIdAndDelete(id)
    .then((data) => res.redirect('/sitios') )
    .catch(err => console.log(err))


})

router.get('/:id', (req, res) => {
  const id = req.params.id
  const myKey = process.env.API
  Places
  .findById(id)
    .then(data => {
      res.render('./detail', {data, myKey})
    })
  .catch(err => console.log(err))


})

module.exports=router