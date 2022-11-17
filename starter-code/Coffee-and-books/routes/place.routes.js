const router = require("express").Router()
const Place = require("../models/Place.model")



//Create
router.get('/lugares/crear', (req, res, next) => {
    res.render('places/create')
})

//Create
router.post('/lugares/crear', (req, res, next) => {
    const { name, type } = req.body

    Place
        .create({ name, type })
        .then(() => res.redirect('/lugares'))
        .catch(err => console.log(err))
})
//Read (List)
router.get('/lugares', (req, res, next) => {

    Place
        .find()
        .then(places => {
            res.render('places/list', { places })
        })
        .catch(err => console.log(err))
})

//Update (edit)
router.get('/lugares/:place_id/editar', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => {
            res.render('places/edit', place)
        })
        .catch(err => console.log(err))
})

//Update (edit)
router.post('/lugares/:place_id/editar', (req, res, next) => {
    const { name, type } = req.body
    const { place_id } = req.params

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => res.redirect('/lugares'))
        .catch(err => console.log(err))
})

//Delete
router.post('/lugares/:place_id/eliminar', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/lugares'))
        .catch(err => console.log(err))
})
//Map
router.get("/lugares/mapa", (req, res, next) => res.render("places/map"))










module.exports = router