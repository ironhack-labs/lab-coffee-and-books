const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))


//new get y post --->>> tiene que ir antes de los :id porque sino los va cambiando
router.get('/places/new', (req, res, next) => {

  const config = {
    action: '/places/new',
    place: {},
    button: 'Create'
  }

  res.render('new', config)
})

router.post('/places/new', (req, res, next) => {
  Place.create({ ...req.body })
    .then(place => {
      res.redirect(`/places/${place._id}`)
    })
    .catch(err => {
      res.send(err)
    })
})

 //ruta places
router.get('/places', (req, res, next) => {
  Place.find()
  .then(places => {
    res.render('places', {places})
  })
  .catch(err => {
    res.send(err)
  })
})

//ver un lugar solo
router.get('/places/:id', (req, res, next) => {

  const{id} = req.params
  
  Place.findById(id)
  .then(place => {
    console.log(place)
    res.render('detail', place) //place sin {{}} porque ya es objeto
  })
  .catch(err => {
    res.render(err)
  })

})

router.get('/places/:id/edit', (req, res, next) => {
  const { id } = req.params
  Place.findById(id)
    .then(place => {
      const config = {
        action: `/places/${place._id}/edit`,
        button: 'Edit',
        place
      }
      res.render('new', config)
    })
    .catch(err => {
      res.send(err)
    })
})

router.post('/places/:id/edit', (req, res, next) => {
  const { id } = req.params
  Place.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(place => {
      res.redirect(`/places/${place._id}`)
    })
    .catch(err => {
      res.send(err)
    })
})


//delete
router.get('/places/:id/delete', (req, res, next) =>{
  const {id} = req.params
  Place.findByIdAndRemove(id)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    res.send(err)
  })
})


module.exports = router;
