const Place = require('../models/Place')

exports.getPlaces = (req, res, next) => {
  Place.find()
    .then(places => res.render('index', { places }))
    .catch(err => next(err))
}

exports.getOnePlace = (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('place', place))
    .catch(err => next(err))
}

exports.getCreatePlace = (req, res, next) => res.render('create')

exports.postCreatePlace = (req, res, next) => {
  const { location } = req.body
  const n = {
    ...location,
    coordinates: [Number(location.coordinates[0]), Number(location.coordinates[1])]
  }
  Place.create({ ...req.body, n })
    .then(place => res.redirect(`/places/${place._id}`))
    .catch(err => next(err))
}

exports.getEditPlace = (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.render('edit', place))
    .catch(err => next(err))
}

exports.postEditPlace = (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(place => res.redirect(`/places/${place._id}`))
    .catch(err => next(err))
}

exports.getDeletePlace = (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => next(err))
}
