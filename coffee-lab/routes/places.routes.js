const router = require("express").Router();
const PlaceModel = require('../models/place.model')


//GET ROUTES
router.get("/", (req, res, next) => {
    PlaceModel.find()
        .then((AllPlaces) => {
            console.log('aqui estan todos los places', AllPlaces)
            res.render("places/places", { AllPlaces })
        })
        .catch((err) => next(err))

});

router.get("/create", (req, res, next) => {
    res.render("places/create-place")
});

router.get("/:idPlace/update", (req, res, next) => {
    PlaceModel.findById(req.params.idPlace)
        .then((place) => res.render("places/edit-place", place))
        .catch((err) => next(err))
})

router.get('/:idPlace/delete', (req, res, next) => {
    PlaceModel.findByIdAndDelete(req.params.idPlace)
        .then(() => res.redirect('/places'))
        .catch((err) => next(err))
})

//POST ROUTES
router.post("/create", (req, res, next) => {
    const { name, type, longitude, latitude } = req.body

    const newPlace = {
        name,
        type,
        location: {
            type: 'Point',
            coordinates: [
                longitude,
                latitude
            ]
        }
    }
    // const title = req.body.title;
    // const genre = req.body.genre;
    PlaceModel.create(newPlace)
        .then(() => res.redirect("/places"))
        .catch(() => res.render("places/create-place"))
})

router.post("/:idPlace/update", (req, res, next) => {
    const { name, type, longitude, latitude } = req.body

    const newPlace = {
        name,
        type,
        location: {
            type: 'Point',
            coordinates: [
                longitude,
                latitude
            ]
        }
    }
    PlaceModel.findByIdAndUpdate(req.params.idPlace, newPlace)
        .then(() => res.redirect('/places'))
        .catch((err) => next(err))
})

module.exports = router;