const router = require('express').Router()

const Place = require('../models/place.js')
//CREATE
router.get('/places/new', (req, res) => {
    Place
        .find()
        .then(() => {
            res.render('places/new')
        })
        .catch(err => console.log(err))
})

router.post('/places/new', (req, res) => {
    const { name, type, latitude, longitude } = req.body
    Place
        .create({ name, type, location: { type: 'Point', coordinates: [latitude, longitude] } })
        .then(() => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))
})

router.get('/places/list', (req, res) => {
    Place
        .find()
        .then(place => {
            res.render('places/list', { place })
        })
        .catch(err => console.log(err))
})

//EDIT
router.get('/places/:id/edit', (req, res) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => console.log(err))
})
//UPDATE
router.post('/places/:id/edit', (req, res) => {
    const { id } = req.params
    const { name, type } = req.body // revisar que los parametros sean igual que el modelo.
    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => {
            res.redirect('/places/list') // redirect reciba una ruta NO una vista.
        })
        .catch(err => console.log(err))
})

//DELETE
router.get('/places/:id/delete', (req, res) => {
    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.render('places/list')
        })
        .catch(err => console.log(err))
})
module.exports = router