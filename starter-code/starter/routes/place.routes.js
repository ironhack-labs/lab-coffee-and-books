const router = require('express').Router()
const Place = require('./../models/Place.model')
/* GET home page */
router.get('/list', (req, res, next) => {
  Place.find()
    .then((places) => res.render('places/index', { places }))
    .catch((err) => next(err))
})
/* GET FORM CREATE */
router.get('/new', (req, res, next) => {
  res.render('places/place-form')
})

/* POST FORM CREATE */
router.post('/new', (req, res, next) => {
  const { name, type, lat, lng } = req.body
  console.log(req.body)
  const location = {
    type: 'Point',
    coordinates: [lat.toString(), lng.toString()],
  }
  Place.create({ name, type, location })
    .then(() => res.redirect('/list'))
    .catch((err) => console.log(err))
  res.render('index')
})

/* DELETE */
router.post('/delete/:id', (req, res) => {
  const { id } = req.params
  Place.findByIdAndDelete(id)
    .then(() => res.redirect('/list'))
    .catch((err) => next(err))
})

/* EDIT */
router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params
  Place.findById(id)
    .then((place) => res.render('places/place-edit-form', place))
    .catch((err) => next(err))
})

router.post('/edit', (req, res) => {
  const { id } = req.query

  const { name, type, lat, lng } = req.body
 
  const location = {
    type: 'Point',
    coordinates: [lat.toString(), lng.toString()],
  }

  Place.findByIdAndUpdate(id, { name, type,location }, { new: true })
    .then(() => res.redirect(`/list`))
    .catch((err) => next(err))
})

module.exports = router
