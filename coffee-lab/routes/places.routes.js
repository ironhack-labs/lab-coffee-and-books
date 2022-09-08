const router = require("express").Router();

const PlaceModel = require("../models/places.model")


// places list

router.get('/', (req, res, next) => {
    PlaceModel.find()
        .then((places) => {
            res.render('places/places', { places })
        })
        .catch((err) => {
            next(err)
        })
})

// create place

router.get('/create', (req, res, next) => {
    res.render('places/create-place');

});

router.post('/create', (req, res, next) => {
    const { name, type, longitude, latitude } = req.body
    const location = { type: 'Point', coordinates: [longitude, latitude] };
    PlaceModel.create({ name, type, location })
        .then((place) => {
            res.redirect('/places');
        })
        .catch((err) => {
            next(err);
        });
});

// edit place

router.get('/:id/edit', (req, res, next) => {
    PlaceModel.findById(req.params.id)
        .then((place) => {
            res.render('places/edit-form', place)
        })
        .catch((err) => next(err));
});

router.post('/:id/edit', (req, res, next) => {
    const { name, type, coordinates } = req.body;
    PlaceModel.findByIdAndUpdate(req.params.id, { name, type, coordinates })
        .then((place) => {
            res.redirect('/places')
        })
        .catch((err) => next(err))
});

// delete

router.get('/:id/delete', (req, res, next) => {
    PlaceModel.findByIdAndDelete(req.params.id)
        .then((place) => {
            res.redirect('/places')
        })
        .catch((err) => next(err))
})

module.exports = router
