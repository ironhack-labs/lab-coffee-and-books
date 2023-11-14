const express = require('express')
const router = express.Router()
const Place = require ('./../models/Place.model')

// router.get('/', (req,res) => {
//     res.render('/index')
// })
router.get('/create', (req, res, next) => {
    res.render('places/create')
})
router.post('/create' , (req, res, next) => {
    
    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat,lng]
    }

    Place
    .create({name, type, location})
    .then(() => 
        res.redirect('/'))
    .catch(err => next(err))
})

router.get('/list', (req, res, next) => {
    Place
        .find()
        .then(places => 
            res.render('/places/places', {places}))
        .catch(err => next(err))
})

router.get('/:id/edit', (req,res,next) => {

    const { id } = req.params
    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat,lng]
    } 

    Place
        .findByIdAndUpdate(id, {name, type, location})
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

router.post('/:id/delete', (req, res) => {
    const { id } = req.params

    Place
        .findByIdAndRemove(id)
        .then(() =>
        res.redirect('/places'))
        .catch(err => console.log(err))
})

module.exports = router