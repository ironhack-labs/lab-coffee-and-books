const Place = require('../models/Place')

exports.allPlaces = async (req, res, next) => {
  const places = await Place.find()
  res.render('index', { places })
}

exports.deletePlace = async (req, res, next) => {
  const { id } = req.params
  await Place.findByIdAndDelete(id)
  res.redirect('/')
}

exports.createPlace = async (req, res, next) => {
  const { lng, lat, name, address, type } = req.body
  console.log("type:" + type)
  const place = { name, address, location: { type: 'Point', coordinates: [lng, lat] }, type }
  await Place.create(place)
  res.redirect('/')
}

exports.createPlaceForm = (req, res, next) => {
  res.render('new-place')
}

exports.updatePlaceForm = async (req, res, next) => {
  const { id } = req.params
  const place = await Place.findById(id)
  if (place.type === 'BOOKSTORE') place.book = true
  else place.coffee = true
  res.render('update-place', place)
}

exports.updatePlace = async (req, res, next) => {
  const { lng, lat, name, address, type } = req.body
  const { id } = req.params
  const place = { name, address, location: { type: 'Point', coordinates: [lng, lat] }, type, }
  await Place.findByIdAndUpdate(id, place)
  res.redirect('/')
}

