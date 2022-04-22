const router = require("express").Router();
const Place = require('../models/User.model')

router.get("/", (req, res, next) => {

    Place
        .find()
        .then(place => {
            res.render('places/place-list', { place })
        })
        .catch(err => console.log(err))

});

router.get("/create", (req, res, next) => {
    res.render("places/place-create")

});
router.post("/create", (req, res, next) => {


    const { name, type, latitud, longitud } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitud, longitud]
    }

    Place
        .create({ name, type, location })
        .then(() => {
            res.redirect(`/places`)
        })
        .catch(err => {
            console.log(err)
            res.render('places/place-create')
        })

});

router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})
router.get('/:id/edit', (req, res) => {

    const { id } = req.params
    console.log(id)

    Place
        .findById(id)
        .then(place => {
            console.log(id)
            res.render('places/place-edit', place)
        })
        .catch(err => console.log(err))
})
router.post('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, type, latitud, longitud } = req.body


    Place
        .findByIdAndUpdate(id, { name, type, latitud, longitud })
        .then(() => {
            res.redirect(`/places`)
        })
        .catch(err => console.log(err))
})



module.exports = router;

