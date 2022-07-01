const router = require("express").Router();
const Place = require('./../models/Place.model')

//get all places

router.get('/places/list', (req, res) => {

    //res.send('holaaaaaa')

    Place
        .find()
        .then(allPlaces => res.render('places/list-place', { allPlaces }))
        .catch(err => console.log(err))
})

//create places

router.get('/places/create', (req, res) => {

    //res.send('NA popino')

    res.render('places/create-place')
})

router.post('/places/create', (req, res) => {

    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .create({ name, type, location })
        .then(placesData = res.redirect('/places/list'))
        .catch(err => console.log(err))

})

// edit places

router.get('/places/edit/:id', (req, res) => {

    //res.send('oh hello hello hello')

    const { id } = req.params
    Place
        .findById(id)
        .then(placesData => res.render('places/edit-place', placesData))
        .catch(err => console.log(err))
})

router.post('/places/edit/:id', (req, res) => {

    const { id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places/list'))
    console.log(placesData)
        .catch(err => console.log(err))
})

// delete

router.get('/places/delete/:id', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

//map

router.get('/places/map-place', (req, res) => {
    res.render('places/map-place')
})

module.exports = router