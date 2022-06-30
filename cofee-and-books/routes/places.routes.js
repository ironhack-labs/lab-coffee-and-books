const router = require("express").Router()
const Place = require("../models/place.model")

//List
router.get('/lista', (req, res) => {
    Place
        .find()
        .then(places => {
            res.render('places/list', { places })
        })
        .catch(err => console.log(err))
})

//Create
router.get('/lista/crear', (req, res) => {
    res.render('places/create')
})

router.post('/lista/crear', (req, res) => {
    const { name, type, latitude, longitude } = req.body

    const placeData = { name, type }
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .create({ name, type, location })
        .then(newPlace => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

//Update
router.get('/lista/:id/cambiar', (req, res) => {
    const { id } = req.params
    Place
        .findById(id)
        .then((place) => res.render('places/update', place))
        .catch(err => console.log(err))
})

router.post('/lista/:id/cambiar', (req, res) => {
    const { id } = req.params
    const { name, type } = req.body
    const newData = { name, type }

    Place
        .findByIdAndUpdate(id, newData)
        .then(() => {
            res.redirect('/lista')
        })

})

//delete
router.post('/lista/:id/eliminar', (req, res) => {
    const { id } = req.params
    console.log(id)

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/lista')
        })
        .catch(err => console.log(err))
})

module.exports = router;
