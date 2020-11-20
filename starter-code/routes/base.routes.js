const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))


//1.Create
router.get('/new', (req, res) => res.render('places/new-place'))

router.post('/new', (req, res, next) => {

  const { name, type } = req.body
  const location = { type: 'Point', coord: '' }

  Place
    .create({ name, type, location })
    .then(() => res.redirect('/')
      .catch(err => next(new Error(err))))
})


//2.Read
router.get('/list', (req, res) => res.render('places/all-place'))

router.get('/list', (req, res, next) => {

  Place
    .find()
    .then(eachElm => res.render('places/all-place', { eachElm }))
    .catch(err => next(new Error(err)))

})



//3.Delete
// router.get('/list', (req, res, next) => {

//   Place
//     .findByIdAndDelete(req.query.id)
//     .then(() => res.redirect('/all-place'))
//     .catch(err => next(new Error(err)))
// })


//4.Edit
// router.post('/edit', (req, res, next) => {

//   Place
//     .findByIdAndUpdate(req.query.id)
//     .then(() => res.redirect(`/places/${req.query.id}`))
//     .catch(err => next(new Error(err)))
// })


// 5.Details




module.exports = router