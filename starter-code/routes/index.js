const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/places', (req, res, next) => {
  Place.find()
    .then(places => {
      res.render('./places', { places })
    })
    .catch(err => console.log(err))
})

router.get('/places/:id/delete', (req, res, next) => {
  const { id } = req.params
  Place.findByIdAndRemove(id)
    .then(() => res.redirect('/places'))
    .catch(err => console.log(err))
})

router.get('/places/new', (req, res, next) => {
  const config = {
    action: '/places/new',
    button: 'Create!',
    place: {}
  }
  res.render('./new', config)
})

router.post('/places/new', (req, res, next) => {
  Place.create({ ...req.body })
    .then(place => res.redirect(`/places/${place._id}`))
    .catch(err => console.log(err))
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
      res.render('./new', config)
    }) 
    .catch(err => console.log(err))
})

router.post('/places/:id/edit', (req, res, next) => {
  const { id } = req.params
  Place.findByIdAndUpdate(id, {$set: { ...req.body } }, { new: true})
    .then(place => res.redirect(`/places/${place._id}`))
    .catch(err => console.log(err))
})

router.get('/places/:id', (req, res, next) => {
  const { id } = req.params
  Place.findById(id)
    .then(place => res.render('./place', place))
    .catch(err => console.log(err))
})

module.exports = router;
