const router = require("express").Router();
const Place = require('../models/Place.model')
    /* GET home page */

router.get("/places/create", (req, res, next) => {


    res.render("places/places-create")
});
router.post("/places/create", (req, res, next) => {

    const { name, type, lat, long } = req.body
    Place
        .create({ name, type, lat, long })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))

});
router.get("/places", (req, res, next) => {
    Place
        .find()
        .then(place => {
            console.log(place)
            res.render("places/places", { place })
        })
        .catch(err => console.log(err))

});

router.get("/places/:id", (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(place => {
            res.render("places/places-details", place)

        })
        .catch(err => console.log(err))


});

router.get("/places/:id/delete", (req, res, next) => {
    const { id } = req.params
    Place
        .findByIdAndRemove(id)
        .then(() => {
            res.redirect('/places')
        })


});
router.get("/places/:id/edit", (req, res, next) => {
    const { id } = req.params
    const { name, type } = req.body
    Place
        .findById(id)
        .then(place => {
            res.render('places/places-edit', place)
        })


});
router.post("/places/:id/edit", (req, res, next) => {
    const { id } = req.params
    const { name, type, lat, long } = req.body

    Place
        .findByIdAndUpdate(id, { name, type, lat, long })
        .then(() => {
            res.redirect('/places')
        })


});

router.get("/map/places", (req, res, next) => {
    res.render('places/place-maps')
})

router.get('/API/places', (req, res) => {

    Place
        .find()
        .then(place => res.json(place))
        .catch(err => console.log(err))
})
module.exports = router;