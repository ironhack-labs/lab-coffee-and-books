const express = require('express');
const router = express.Router();
const Place = require('../models/place.model')

router.get('/', (req, res, next) => {

    Place.find()
        .then(allPlaces => res.render('places/findPlaces', {
            places: allPlaces
        }))
        .catch(err => console.log("Error consultando la BBDD: ", err))
});

router.get('/details/:id', (req, res) => {
    const placeId = req.params.id
    Place.findById(placeId)
        .then(place => res.render('places/placeDetails', {
            places: place
        }))
        .catch(err => console.log("Error consultando la BBDD: ", err))
});
router.get('/add', (req, res) => res.render('places/addPlaces'))

router.post('/add', (req, res) => {
let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
}


    const {name,type,} = req.body

    Place.create({name,type,location})
        .then(x => res.redirect('/places'))
        .catch(err => 'error: ' + err)
})
router.post('/delete', (req, res) => {
    const placeId = req.query.placeId
    Place.findByIdAndRemove(placeId)
        .then(res.redirect('/places'))
        .catch(err => 'error: ' + err)
})
router.get('/edit', (req, res) => {
    const placeId = req.query.placeId
    Place.findById(placeId)
        .then(place => res.render('places/editPlaces', place))
        .catch(err => console.log('error!!', err))
})
router.post('/edit', (req, res) => {
    const {name,type,location} = req.body
    console.log("noooooooooo", name, type)
    const placeId = req.query.placeId

    Place.findByIdAndUpdate(placeId, {name,type})
        .then(res.redirect('/places'))
        .catch(err => console.log('error!!', err))
})
router.get('/api', (req, res, next) => {
    Place.find()
        .then(allPlaces => res.status(200).json({
            places: allPlaces
        }))
        .catch(err => next(err))
});


router.get('/api/:id', (req, res, next) => {
    let placesId = req.params.id;
    Place.findById(placesId)
    .then(idPlace => res.status(200).json({
        place: idPlace
    }))
});
router.get('/details/:id', (req, res) => {
    const placeId = req.params.id
    Place.findById(placeId)
        .then(place => res.render('places/placeDetails', {
            places: place
        }))
        .catch(err => console.log("Error consultando la BBDD: ", err))
});
module.exports = router;