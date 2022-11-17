const router = require("express").Router()

const Coffee = require('./../models/place.model')

router.get('/coffee', (req, res, next) => {
    Coffee
        .find()
        .then(coffee => {
            res.render('place/coffeebooks', { coffee })
        })
        .catch(err => console.log(err))
});

router.get("/create", (req, res, next) => res.render("place/new-place"))
router.post('/create', (req, res, next) => {
    const { name, type } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Coffee
        .create({ name, type, location })
        .then(() => {

            res.redirect(`/shop/coffee`)
        })
        .catch(err => console.log(err))
})

router.get('/details/:place_id', (req, res) => {

    const { place_id } = req.params

    Coffee
        .findById(place_id)
        .then(place => {
            res.render('place/place-details', place)
        })
        .catch(err => console.log(err))
})

router.get("/edit/:place_id", (req, res) => {

    const { place_id } = req.params

    Coffee
        .findById(place_id)
        .then(place => {
            res.render('place/place-edit', { place })
        })
        .catch(err => console.log(err))
})

router.post("/edit/:place_id", (req, res) => {
    console.log('Entro aqui')
    const { name, type } = req.body
    console.log(req.body)

    const { place_id } = req.params

    Coffee
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => res.redirect(`/shop/details/${place_id}`))
        .catch(err => console.log(err))
})

router.post('/delete/:place_id', (req, res) => {

    const { place_id } = req.params

    Coffee
        .findByIdAndDelete(place_id)
        .then(() => res.redirect(`/shop/coffee`))
        .catch(err => console.log(err))

})


router.get('/mapa', (req, res, next) => res.render('maps/mapbasic'))




module.exports = router