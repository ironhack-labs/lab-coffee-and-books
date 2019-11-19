const express = require('express');
const router = express.Router();
const places = require("../models/place");

/* GET home page */
router.get('/', (req, res, next) => {
    places.find()
        .then((placesFound) => {
            res.render('place/index', {
                placesFound
            })
        })
});

router.get('/:id', (req, res, next) => {
    places.findOne({
            _id: req.params.id
        })
        .then((placeFound) => {
            res.render('place/create', placeFound)
        })
        .catch(() => {
            next()
        })

});

router.get('/:id/edit', (req, res, next) => {
    res.render('place/edit', place)
});

router.post('/:id', (req, res, next) => {
    places.updateOne({
            _id: req.body.id
        }, {
            name: req.body.name,
            type: req.body.type
        })
        .then(() => {
            res.redirect('/place')
        })

})

router.post('/:id/edit', (req, res, next) => {
    places.findOne({
            _id: req.body.id
        })
        .then((place) => {
            res.render('place/edit', place)
        })
        .catch(() => {
            next()
        })
});

router.post('/:id/delete', (req, res, next) => {
    places.findByIdAndRemove(req.body.id)
        .then(() => {
            res.redirect('/place')
        })
        .catch(() => {
            next()
        })
});


router.get('/new', (req, res, next) => {
    res.render('place/new')

});

router.post('/', (req, res, next) => {
    places.create({
            name: req.body.name,
            type: req.body.type
        })
        .then(() => {
            res.redirect('/place')
        })
});

module.exports = router;