const router = require('express').Router();
const PlaceModel = require('../models/Place.model');

/**
 * GET
 */
router.get('/map', (req, res) => {
    PlaceModel.find()
        .then((places) => {
            res.json(places);
        })
        .catch((err) => next(err));
});

router.get('/', (req, res, next) => {
    PlaceModel
        .find()
        .then((places) => {
            res.render('places/list', { places });
        })
        .catch(next);
});

router.get('/create', (req, res, next) => {
    res.render('places/create');
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    PlaceModel
        .findById(id)
        .then((place) => {
            res.render('places/detail', place);
        })
        .catch(next);
});

router.get('/delete/:id', (req, res, next) => {
    const { id } = req.params;

    PlaceModel
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places');
        })
        .catch(next);
});

router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params;
    const typeArray = ['Coffee shop', 'Bookstore'];

    PlaceModel
        .findById(id)
        .then((place) => {
            typeArray.map((type, i, types) => { if (type === place.type) { types.splice(i, 1) } });
            res.render(`places/edit`, { place, typeArray });
        })
        .catch(next);
});

// /**
//  * POST
// */
router.post('/create', (req, res, next) => {
    const { name, type, lat, long } = req.body;
    const place = { name, type, location: { type: 'Point', coordinates: [lat, long] } };

    PlaceModel
        .create(place)
        .then(() => {
            res.redirect('/places');
        })
        .catch(next);
});

router.post('/edit/:id', (req, res, next) => {
    const { id } = req.params;
    const { name, type, lat, long } = req.body;

    PlaceModel
        .findByIdAndUpdate(id, { name, type, 'location.coordinates': [lat, long] }, { new: true })
        .then((place) => {
            res.render(`places/detail`, place);
        })
        .catch(next);
});
module.exports = router;