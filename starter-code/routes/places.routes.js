const router = require("express").Router();
const Place = require('../models/Place.model')

router.get('/create', (req, res) => {
  res.render('places/places-create')
})

router.post('/create', (req, res) => {
  const { name, lat, lng } = req.body
  const location = {
    type: "Point",
    coordinates: [lat, lng]
  }

  Place
    .create({ name, location })
    .then(() => res.redirect('/create'))
    .catch(err => console.log(err))
})

router.get('/places', (req, res) => {
  Place
    .find()
    .then(places => res.render("places/places", { places }))
    .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params

  Place
    .findById(id)
    .then(place => res.render("places/places-edit", place))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, lat, lng } = req.body
  const location = {
    type: "Point",
    coordinates: [lat, lng]
  }

  Place
    .findByIdAndUpdate(id, { name, location }, { new: true })
    .then(res.redirect(`/${id}/edit`))
    .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params

  Place
    .findByIdAndDelete(id)
    .then(() => res.redirect("/places"))
    .catch(err => console.log(err))
});

router.get('/map', (req, res, next) => res.render('places/marked-map'))

module.exports = router;