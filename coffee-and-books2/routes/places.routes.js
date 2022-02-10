const router = require("express").Router();
const Place = require('../models/place')


// Adding New Places (render)
router.get('/create', (req, res, next) => {
    res.render('../views/new-place')
})

//Adding New Places (handle)
router.post('/create', (req,res,next) => {

    const { name, type } = req.body

    Place
        .create({ name, type })
        .then(() => res.redirect('/places'))
        .catch(err => {
            res.render('../views/new-place')
            console.error(err)
        })
})

// List Places (Read)
router.get('/', (req, res, next) => {

    Place
        .find()
        .then(placeInfo => res.render('../views/places', { placeInfo }))
        .catch(err => console.log(err))
})

// Delete Places
router.post('/:id/delete', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(placeDetail => res.render('../views/detail-place', placeDetail))
        .catch(err => console.log(err))
})

// Route for edit
router.get('/:id/edit', (req,res,next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(placeToEdit => res.render('../views/edit-place' , placeToEdit)) 
        .catch(err => console.log(err))            
})

// Route for edit
router.post('/:id/edit', (req, res, next) => {

    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, {name, type}, {new: true} )
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

module.exports = router;




 


