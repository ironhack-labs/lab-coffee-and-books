const router = require("express").Router();

const Place = require("./../models/Place.model")



router.get("/list", (req, res) => {

    Place
        .find()
        .then(places => {
            res.render('places/list-places', { places })
        })
        .catch(err => console.log(err))

})

router.get("/create", (req, res) => {

    res.render("places/create-places")

})

router.post("/create", (req, res) => {

    //res.send("sdhfdshdshvsdfhvdfshvdshdfhv")

    //res.send(req.body)

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    /* console.log(location) */

    Place
        .create({ name, type, location })
        .then(response => {
            console.log(response)
            res.redirect('/list')
        })
        .catch(err => console.log(err))

})


router.get('/places/:places_id/edit', (req, res) => {

    const { places_id } = req.params
    console.log(req.body)
    Place
        .findById(places_id)
        .then(place => {
            console.log(place)
            res.render('places/edit-places', place)
        })
        .catch(err => console.log(err))

})

router.post('/places/:places_id/edit', (req, res) => {

    const { places_id } = req.params
    const { name, type, location } = req.body
    const placeValue = { name, type, location }

    Place
        .findByIdAndUpdate(places_id, placeValue)
        .then(place => res.redirect('/list'))
        .catch(err => console.log(err))
})

//Delete

router.get('/places/:places_id/delete', (req, res) => {

    const { places_id } = req.params

    Place
        .findByIdAndDelete(places_id)
        .then(() => res.redirect('/list'))
        .catch(err => console.log(err))
})

//MAPS

router.get('/map', (req, res) => {

    res.render('maps/map')

})






module.exports = router