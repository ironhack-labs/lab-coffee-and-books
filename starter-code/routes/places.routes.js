const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

//List all and display
router.get('/', (req, res) => {
    

    Place
        .find()
        .then(allPlacesCreated => {
            // console.log('las celebs son:', allCelebritiesCreated)
            
            res.render('index', {allPlacesCreated})
        })
        .catch(err => console.log(err))
});

//Display details

router.get('/details/:place_id', (req, res) => {
    
    const placeId = req.params.place_id

    Place
        .findById(placeId)
        .then(thePlace => {
            res.render('details', thePlace)
        })
        .catch(err => console.log(err))
});

//Create new place
router.get('/new', (req, res) => res.render('new'))

router.post('/new', (req, res) => {
    const { name, type, location } = req.body
    
    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
});

//Delete place
router.get('/delete-place', (req, res) => {

    const placeId = req.query.place_id

    Place
        .findByIdAndDelete(placeId)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
});

//Edit Place
router.get('/edit-place', (req, res) => {
    const placeId = req.query.place_id

    Place
        .findById(placeId)
        .then(placeInfo => res.render('edit', placeInfo))
        .catch(err => console.log(err))
})
    
router.post('/edit-place', (req, res) => {
    const placeId = req.query.place_id

    const { name, type, location } = req.body
        
    Place
        .findByIdAndUpdate(placeId, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))

    })

module.exports = router