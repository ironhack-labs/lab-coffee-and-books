const router = require("express").Router()

const Places = require('./../models/Places.model')

router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.post('/create', (req, res, next) => {

    const { name, type, lat, lgn } = req.body
    const location = [lat, lgn]

    //res.send(coordinates)

    Places
        .create({ name, type, location })
        .then(newPlace => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))
})

router.get('/list', (req, res, next) => {

    Places
        .find()
        .then(places => {
            res.render('places/list', { places })
        })
        .catch(err => console.log(err))
})



router.get('/edit/:id', (req, res, next) => {

    const { id } = req.params
    //res.send(req.params)

    Places
        .findById(id)
        .then(place => {
            res.render('places/edit', place)
        })
        .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res, next) => {

    const { id } = req.params
    const { name, type } = req.body

    res.send(req.params)
    //res.send(req.body)

    Places
        .findByIdAndUpdate(id, { name, type })
        .then(() => {
            res.redirect('/places/list')
        })
        .catch(err => console.log(err))
})


module.exports = router;
