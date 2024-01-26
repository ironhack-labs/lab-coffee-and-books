const router = require("express").Router()
const Place = require("../models/Place.model")
  
  router.get('/create', (req, res, next) => {
      res.render('places/create-place')
    })
  
  router.post('/create', (req, res, next) => {
    const { name, type, longitude, latitude} = req.body

    const newPlace = new Place({
        name,
        type,
        location: {
          type: 'Point',
          coordinates: [longitude, latitude]
        }
      });
    newPlace
    .save()
    .then(()=>{
      res.redirect('/')
    })
    .catch(err =>{
      console.error(err)
  })
  });
  
  router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params
    Place
    .findById(id)
    .then(details=>{
      res.render('places/edit-place', details)
    })
    .catch(err =>{
      console.error(err)
  })
  });
  
  router.post('/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { name, type, timestamps } = req.body
    Place
    .findByIdAndUpdate(id, { name, type, timestamps })
    .then(()=>{
      res.redirect('/')
    })
    .catch(err =>{
      console.error(err)
  })
  });

  router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})
  
  module.exports = router;
  