const express = require('express');
const router = express.Router();
const Place = require("../models/place")

router.get('/create', (req, res) => {

    res.render('viewsPlace/createPlace')
})
router.post('/create', (req, res, next) => {

    const { place, type, latitude, longitude } = req.body
    const location = {
        type: 'point',
        coordinates: [longitude, latitude]
    }
    Place
        .create({ place, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))

})

router.get('/listPlace', (req, res) => {

    Place
        .find()
        .then(eachPlace => res.render('viewsPlace/listPlace', { eachPlace }))
        .catch(err => console.log(err))


})


router.get('/editPlace/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('viewsPlace/editPlace', place))
        .catch(err => console.log(err))


})
router.post('/editPlace/:place_id', (req, res, next) => {
    const { place_id } = req.params
    const { place, type, latitude, longitude } = req.body
    const location = {
        type: 'point',
        coordinates: [longitude, latitude]
    }
    Place
        .findByIdAndUpdate(place_id, { place, type, location })
        .then(() => res.redirect('/listPlace'))
        .catch(err => console.log(err))

})

router.post('/delete/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect(`/listPlace`))
        .catch(err => console.log(err))
})




module.exports = router;