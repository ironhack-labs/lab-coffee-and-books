const router = require('express').Router()
const { find } = require('./../models/places')
const Place = require('./../models/places')


router.get('/create', (req, res, next) => {

    res.render('places/create-page')
})

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    Place
        .create({ name, type, location: { type: 'Point', coordinates: [longitude, latitude] } })
        .then(newStore => {
            res.redirect('/stores')
        })
        .catch(err => console.log('estoy dando errorcito al crear', err))
})

router.get('/stores/:id/edit', (req, res, next) => {
    const { id } = req.params



    Place
        .findById(id)
        .then(oneStore => {
            res.render('places/edit-store', oneStore)

        })
        .catch(err => console.log('errorcito de la edisssion', err))
})

router.post('/stores/:id/edit', (req, res, next) => {

    const { id } = req.params
    const { name, type, latitude, longitude } = req.body

    Place
        .findByIdAndUpdate(id, { name, type, location: { type: 'Point', coordinates: [longitude, latitude] } })
        .then(updateStore => {
            res.redirect('/stores')

        })
        .catch(err => console.log('errorcito de la edisssion', err))
})

router.post('/stores/:id/delete', (req, res, next) => {

    const { id } = req.params


    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/stores')
        })
        .catch(err => console.log('errorcito de la deletasssion', err))
})


module.exports = router