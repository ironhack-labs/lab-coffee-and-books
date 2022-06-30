const router = require("express").Router();
const Place = require('../models/place.model')

router.get("/list", (req, res, next) => {
    Place
        .find()
        .then(places => {
            console.log(places)
            res.render('places/list', { places })
        })
        .catch(e => console.log(e))

});

router.get("/create", (req, res) => {
    res.render('places/create')
})

router.post("/create", (req, res) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    // METE AQUÍ LA VAINA DEL LOCATION

    Place
        .create({ name, type, location })
        .then(res.redirect('/list'))
        .catch(e => console.log(e))
})

router.get("/edit/:id", (req, res) => {
    const { name, type } = req.body
    const { id } = req.params
    console.log(id)

    Place
        .findById(id)
        .then(places => {
            res.render('places/edit', places)
        })
        .catch(e => console.log(e))
})

router.post("/edit/:id", (req, res) => {
    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(res.redirect('/list'))
        .catch(e => console.log(e))
})

router.get("/delete/:id", (req, res) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(res.redirect('/list'))
        .catch(e => console.log(e))
})

module.exports = router;