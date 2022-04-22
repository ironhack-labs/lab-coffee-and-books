const router = require('express').Router()
const Place = require('./../models/places')


router.get('/stores', (req, res, next) => {
    Place
        .find()
        .then(allStores => {
            res.render('./maps/details-stores', { allStores })
        })
        .catch(err => console.log('Soy el errorcito de details page', err))
})
module.exports = router