const Place = require('../models/place')

exports.getPlaces = (req, res, next) => {
  Place.find()
    .then(places => {
      res.render('places/list', {places})
    })
    .catch(err => {
      res.render('places/list', err)
    })
}

exports.getPlacesById = (req, res, next) => {
  const { id } = req.params
  Place.findById(id)
    .then(place => {
      console.log(place)
      res.render('places/detail', place)
    })
    .catch(err => {
      res.render('places/detail', err)
    })
}

exports.getCreatePlaces = (req, res, next) => {
  res.render('places/create')
}

exports.postCreatePlaces = (req, res, next) => {
  const {name, placeType} = req.body
  Place.create({name, placeType})
  .then(place => {
    console.log(place);
    res.redirect('/places')
  })
  .catch(err => {
    res.send(err)
  })
}


exports.getUpdatePlaces = (req, res, next) => {
  const { id } = req.params
  Place.findById(id)
    .then(place => {
      console.log(place)
      res.render('places/edit', place)
    })
    .catch(err => {
      res.render('places/edit', err)
    })
}

exports.postUpdatePlaces = (req, res, next) => {
  const { id } = req.params
  const {name, placeType} = req.body
  Place.findByIdAndUpdate(id, {name, placeType}, { new: true })
    .then(updatePlace => {
      res.redirect(`/places/${updatePlace._id}`)
    })
    .catch(err => {
      next()
      console.log(err)
    })
}

exports.deletePlaces = (req, res, next) => {
  const { id } = req.params
  Place.findByIdAndRemove(id)
    .then(deleteOne => {
      res.redirect('/places')
    })
    .catch(err => {
      next()
      console.log(err);
    })
}