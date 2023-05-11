const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

//Create place
router.get("/create", (req, res, next) => {
    res.render("place/create-page")
})
router.post("/create", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => next(err))

})


//Place List
router.get('/list', (req, res, next) => {

    Place
        .find()
        .select({ name: 1 })
        .then(restaurants => {
            res.render('place/list-page', { restaurants })
        })
        .catch(err => next(err))

})

router.get('/:id/details', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(restaurant => {
            res.render('place/details-page', restaurant)
        })
        .catch(err => next(err))

})


// Edit Page
router.get('/:id/edit', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(restaurant => {
            res.render('place/edit-page', restaurant)
        })
        .catch(err => next(err))

})

router.post('/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => next(err))

})

//Delete place
router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => next(err))

})



module.exports = router