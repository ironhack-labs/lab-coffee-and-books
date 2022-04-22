const router = require("express").Router()

const Place = require('./../models/Place.model')

router.get('/', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list.hbs', { places }))
        .catch(err => console.log(err))
});

router.get('/create', (req, res, next) => {
    res.render('places/create-form')
});

router.post('/create', (req, res, next) => {

    const { name, type, longitude, latitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }


    Place
        .create({ name, type, location })
        .then(newplace => res.redirect('/places'))
        .catch(err => console.log(err))


});

router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            res.render('places/update-form', place)
            console.log(place)
        })
        .catch(err => console.log(err))



});

router.post('/:id/edit', (req, res, next) => {

    const { name, type, longitude, latitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    const { id } = req.params

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(place => res.redirect('/places'))
        .catch(err => console.log(err))

});

router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))



});

// MAPA

router.get('/map', (req, res) => {
    res.render('maps/map')
})

module.exports = router;