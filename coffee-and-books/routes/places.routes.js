const express = require("express")
const router = express.Router()

const Places = require('../models/places.model')


//LISTA
router.get('/places', (req, res, next) => {

    Places
        .find()
        .then(placesList => { res.render('places/places-list', { placesList }) })
        // ojo!! esto no es la ruta al hacer el render y comprobar es la de arriba!!
        .catch(err => console.log(err))

});


//CREATE
router.get("/new-place", (req, res,) => {

    res.render("places/new-place")

})

router.post("/new-place", (req, res,) => {

    const { name, type, longitude, latitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Places
        .create({ name, type, location })
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))


})


//UPDATE THE PLACE
router.get("/places/:places_id/edit", (req, res, next) => {

    const { places_id } = req.params

    Places
        .findById(places_id)
        .then((place) => res.render("places/update-place", place))
        .catch(err => console.log(err))

});

router.post("/places/:places_id/edit", (req, res, next) => {

    const { places_id } = req.params
    const { name, type } = req.body

    Places
        .findByIdAndUpdate(places_id, { name, type })
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))

});


//DELETE THE PLACE
router.post("/places/:places_id/delete", (req, res, next) => {

    const { places_id } = req.params

    Places
        .findByIdAndDelete(places_id)
        .then(() => res.redirect("/places"))
        .catch(err => console.log(err))
});

































module.exports = router