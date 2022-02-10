const router = require("express").Router()

const Place = require('../models/Place.model')



// Create Places

router.get('/create', (req, res, next) => {
    res.render('places/new-place')
})

router.post('/create', (req, res, next) => {

    const { name, type, location } = req.body

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => {
            res.render('places/new-place')
            console.log(err)
            next(err)
        })
})

// Read Places

router.get('/', (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/my-places', { places }))
        .catch(err => next(err))
})

// Update Places

router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(places => {
            res.render('places/update-place', { places })
        })
        .catch(err => next(err))

})


router.post('/:id/edit', (req, res, next) => {

    const { id } = req.params
    const { name, type, location } = req.body

    Place
        .findByIdAndUpdate(id, { name, type, location }, { new: true })
        .then(updatePlace => res.redirect('/places'))
        .catch(err => {
            res.redirect('/')
            next(err)
        })
})


// Delete Places

router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})




module.exports = router