const express = require('express');
const router = express.Router();
const Coffee = require('../models/place');

router.get('/coffee', (req, res, next) => {
    Coffee
         .find()
         .then(coffee => res.render('marked-map', { coffee }))
         .catch(err => console.log(err))
});

router.get('/coffee/create', (req, res, next) => {
    res.render('coffee/new-coffee') 
});

router.post('/coffee/create', (req, res, next) => {
    const { name, description, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }
    Coffee
         .create({ name, description, lat, lng })
         .then(() => res.redirect('/coffee'))
         .catch(err => console.log(err))
});

router.get('/coffee/:id/edit', (req, res, next) => {
    const { id } = req.params
    Coffee
        .findById(id)
        .then(coffee => res.render('coffee/update-form', coffee))
        .catch(err => console.log(err))
});

router.post('/coffee/:id/edit', (req, res, next) => {
    const { id } = req.params
    const { name, description, lat, lng } = req.body
    Coffee
        .findByIdAndUpdate(id, { name, description, lat, lng }, { new: true })
        .then(() => res.redirect('/coffee'))
        .catch(err => console.log(err))
});

router.post('/coffee/:id/delete', (req, res, next) => {
    const { id } = req.params
    Coffee
        .findByIdAndDelete(id)
        .then(() => res.redirect('/coffee'))
        .catch(err => console.log(err))
});

module.exports = router;