const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')



router.get('/place/create', (req, res, next) => {

  res.render('create-form')
})



router.post('/place/create', (req, res, next) => {


  const { name, type, longitude, latitude } = req.body

  Place
    .create({
      name, type,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    })
    .then(newPlace => {
      res.redirect('/place/list')
    })
    .catch(err => console.log(err))

})


router.get('/place/list', (req, res, next) => {

  Place
    .find()
    .then(places => {
      res.render('list', { places })
    })
    .catch(err => console.log(err))
})



router.get('/places/:id/edit', (req, res, next) => {

  const { id } = req.params

  Place
    .findById(id)
    .then(place => {
      res.render('update-form', place)
    })
    .catch(err => console.log(err))

});


router.post('/places/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, type } = req.body

  Place
    .findByIdAndUpdate(id, { name, type })
    .then(place => {
      res.redirect('/place/list')
    })
    .catch(err => console.log(err))

  router.post('/places/:id/delete', (req, res) => {

    const { id } = req.params

    Place
      .findByIdAndDelete(id)
      .then(() => {
        res.redirect('/place/list')
      })
      .catch(err => console.log(err))
  })
});

module.exports = router