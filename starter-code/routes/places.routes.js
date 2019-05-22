// Requires
const express = require('express')
const app = express.Router()
const Place = require('../models/place.model')


// List places
app.get('/', (req, res, next) => {
  Place.find()
    .then(allPlaces => res.render('places/places-list', { places: allPlaces }))
    .catch(error => console.log(error))
})



// Add places
app.get('/add', (req, res, next) => res.render('places/places-add'))

app.post('/add', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body

  let location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  const newPlace = new Place({ name, type, location })

  newPlace.save()
    .then(x => {
      console.log(`Un nuevo lugar fue añadido ${newPlace}`)
      res.redirect('/places')
    })
    .catch(error => {
      res.redirect('/places')
      console.log(error)
    })
})



// to see raw data in your browser, just go on: http://localhost:3000/api
app.get('/api', (req, res, next) => {
  Place.find()
    .then(api => res.status(200).json({ places: api }))
    .catch(err => console.log(err))
})


// Clear places

app.get('/:place_id/delete', (req, res, next) => {
  Place.findByIdAndDelete(req.params.place_id)
    .then(thePlace => res.redirect('/places'))
    .catch(err => console.log(err))
})


// Detail places

app.get('/:place_id', (req, res, next) => {
  Place.findById(req.params.place_id)
    .then(thePlace => res.render('places/place-detail', { place: thePlace }))
    .catch(err => console.log(err))
})


// Edit places

app.get('/:place_id/edit', (req, res, next) => {
  Place.findById(req.params.place_id)
    .then(thePlace => res.render('places/places-edit', { place: thePlace }))
    .catch(err => console.log(err))
})

app.post('/:place_id/edit', (req, res, next) => {
  const { name, type, latitude, longitude } = req.body

  let location = {
    type: 'Point',
    coordinates: [latitude, longitude]
  }

  Place.update({ _id: req.params.place_id }, { $set: { name, type, location } })
    .then(x => {
      res.redirect('/places')
    })
    .catch(error => console.log(error))
})






// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
// app.get('/api/:id', (req, res, next) => {
//   let placeId = req.params.id;
//   Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {
//     if (error) {
//       next(error)
//     } else {
//       res.status(200).json({ place: onePlaceFromDB });
//     }
//   });
// });


module.exports = app;
