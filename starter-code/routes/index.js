const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => res.render('index'))

router.get('/places/new', (req, res, next) => {
  const config = {
    action: '/places/new',
    place: {},
    button: 'Create'
  }
  res.render('new', config)
})

router.post('/places/new', (req,res,next) => {
  Place.create({ ...req.body })
    .then(place => {
      res.redirect(`/places/${place._id}`)
    })
    .catch(err => res.send(err))
})

router.get('/places/:id', (req,res,next) => {
  const { id } = req.params
  Place.findById(id)
    .then(place => {
      res.render('detail', place)
    })
    .catch(err => res.send(err))
})

router.get('/places/:id/delete', (req,res,next) => {
  const { id } = req.params
  Place.findByIdAndRemove(id)
    .then(() => res.redirect('/places'))
    .catch(err => res.send(err))
})

router.get('/places/:id/edit', (req,res,next) => {
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
    .catch(err => res.send(err))
})

router.post('/places/:id/edit', (req,res,next) => {
  const { id } = req.params
  Place.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .then(place => {
      res.redirect(`/places/${place._id}`)
    })
    .catch(err => res.send(err))
})

module.exports = router;
