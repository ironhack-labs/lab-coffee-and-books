const Place = require('../models/Place')

exports.getPlaces = (req, res, next) => {
  Place.find()
  .then(places => res.render('index', {places}))
  .catch(err => res.send(err))
}

exports.getOnePlace = (req, res, next) => {
  Place.findById(req.params.id)
  .then(place => res.render('place', {place}))
  .catch(err => next(err))
}

exports.getCreatePlace = (req, res, next) => res.render('create')

exports.postCreatePlace = (req, res, next) => {
  Place.create({...req.body})
  .then(place => res.redirect('/places/${place._id}'))
  .catch(err => next(err))
}

exports.getEditPlace = (req, res, next) => {
  Place.findById(req,params.id)
  .then(place => res.render('edit', place))
  .catch(err => next(err))
}

exports.postEditPlace = (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, {...req.body})
  .then(() => res.redirect(`/places/${place._id}`))
  .catch(err => next(err))
}

exports.getDeletePlace = (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
  .then(()=> res.redirect('/'))
  .catch(err => next(err))
}