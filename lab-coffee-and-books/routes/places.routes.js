const router = require("express").Router()

const Place = require('./../models/place')


// Place listing 
router.get('/list', (req, res) => {

    Place
        .find()
        .then(places => {
            res.render('places/places-list', { places })
        })
        .catch(err => console.log(err))
})

router.get('/details/:id', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            res.render('places/place-details', place)
        })
        .catch(err => console.log(err))
})


// Place creation 
router.get('/create', (req, res) => {
    res.render('places/create-place')
})

router.post('/create', (req, res) => {

    const { name, type, longitude, latitude } = req.body
    const location = { type: 'Point', coordinates: [longitude, latitude] }

    Place
        .create({ name, type, location })
        .then(newPlace => {
            res.redirect(`/places/details/${newPlace._id}`)
        })
        .catch(err => console.log(err))
});


// Place edition
router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            res.render('places/update-form', place)
        })
        .catch(err => console.log(err))
});

router.post('/:id/edit', (req, res, next) => {

    const { id } = req.params
    const { name, type, longitude, latitude } = req.body
    const location = { type: 'Point', coordinates: [longitude, latitude] }

    Place
        .findByIdAndUpdate(id, { name, type, location }, { new: true })
        .then(place => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))
});


//Delete
router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))
});


module.exports = router;

