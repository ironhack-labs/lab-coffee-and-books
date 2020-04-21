const express = require('express');
const router = express.Router();

const Places = require('../models/place.model')
/* GET home page */


router.get('/', (req, res, next) => {
  Places.find()
    .then((allPlaces) => res.render('index', { allPlaces }))
    .catch(err => console.log(err))
})

router.get('/new', (req, res, next) => res.render('new'))

router.post('/new', (req, res, next) => {

  let location = {
		type: 'Point',
		coordinates: [req.body.lat, req.body.lng]
	}
  
  Places.create({ name: req.body.name, type: req.body.type, location })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})


router.get('/showbar/:id', (req, res, next) => {
  Places.findById(req.params.id)
    .then(placeId => res.render('showbar',  placeId ))
    .catch((err) => console.log(err))
})

router.post('/:id/delete', (req, res, next) => {
  Places.findByIdAndRemove(req.params.id)
    .then(res.redirect('/'))
    .catch((err) => console.log(err))
})

router.get('/:id/edit', (req, res, next) => {
  Places.findById(req.params.id)
    .then(editPlace => res.render('edit', editPlace))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res, next) => {

  const { name, type } = req.body

  Places.findByIdAndUpdate(req.params.id, { name, type }, { new: true })
    .then(res.redirect('/'))
    .catch(err => console.log(err))
})




router.get('/api', (req, res, next) => {
   Places.find()
     .then(places => {
       res.json(places);
     })
     .catch(error => console.log(error))
 })



module.exports = router;
