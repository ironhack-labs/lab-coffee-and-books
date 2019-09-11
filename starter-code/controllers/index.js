const Place = require('../models/Place')

exports.agregarAlMapa = (req, res, next) => {
  Place.find().then( lugares => {
    res.render('places', {lugares});
  })
}

exports.mostrarPlaces = (req, res, next) => {
  Place.find().then( lugares => {
    res.render('places', {lugares});
  })
}

exports.mostrarForm = (req, res, next) => {
  res.render('crud-places')
}

exports.updateMap = (req, res, next) => {
  let { lng, lat, name, address, role} = req.body
  let place = {name, role, address,
    location: {
      type: 'Point',
      coordinates: [lng, lat]
    }}
  
  Place.create(place).then(() => {
    res.redirect('places')
  })
}

exports.deleteNew = async (req, res) => {
  const {id} = req.params
  await New.findByIdAndDelete(id)

  res.redirect('/places')
}