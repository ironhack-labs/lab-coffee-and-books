const router = require("express").Router()

const Place = require('./../models/Place')

//----> List all places
router.get('/', (req, res) => {

    Place
        .find()
        .then(places => res.render('places/list-places', {places}))
        .catch(err => console.log(err))

})

//----> New place form (render)
router.get("/create", (req, res, next) => {
    res.render("places/new-place")
})

//----> New place form (post)
router.post("/create", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .create({ name, type, location})
        .then(resp => res.redirect('/places'))
        .catch(err => console.log(err))
})

//----> Edit place form (render)
router.get('/edit/:placeId', (req, res, next) => {

    const { placeId } = req.params

    Place
        .findById(placeId)
        .then(resp => {
            res.render('places/edit-place', { resp })
        })
        .catch(err => console.log(err))

})

//----> Edit place form (handler)
router.post('/edit/:placeId', (req, res, next) => {

    const { placeId } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(placeId, { name, type, location })
        .then(() => res.redirect(`/places`))
        .catch(err => console.log(err))
})

//----> Delete place
router.get('/delete/:placeId', (req, res, next) => {
    
    const { placeId } = req.params

    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})


module.exports = router

