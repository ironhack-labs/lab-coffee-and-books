const express = require('express')
const router = express.Router()
const place = require('../models/place.models')



// Create new places
router.get('/new', (req, res, next) => {
    res.render('places/new')
})

router.post('/new', (req, res, next) => {
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newPlace = new place({
        name: req.body.name,
        site: req.body.site,
        location: location // <= add the location when creating a new restaurant
    })

    newPlace.save()
        .then(placeCreated => {
            res.redirect('/')
            console.log('New place created:', placeCreated)
        })
        .catch(err => console.log('error', err))

})

/* GET home page  and get from DB info*/
router.get('/', (req, res, next) => {
    place.find()
        .then(list => {
            res.render('places/index', { allPlaces: list })
        })
        .catch(err => console.log('err', err))
});


// Edit Places information

router.get('/edit/:_id', (req, res, next) => {
    const id = req.params._id
    place.findById(id)
        .then(sites => res.render('places/edit', { places: sites }))
        .catch(error => console.log(error))
})

router.post('/edit/:_id', (req, res, next) => {
    const { name, site } = req.body
    const id = req.params._id

    place.findByIdAndUpdate(id, { name, site }, { new: true })
        .then(update => {
            res.redirect('/')
            console.log('Update success:', update)
        })
        .catch(err => console.log('error', err))
})



// Delete Places 
router.get('/delete/:_id', (req, res, next) => {
    const id = req.params._id
    place.findById(id).remove()
        .then(removed => {
            console.log('Place removed', removed)
            res.redirect('/')
        })
        .catch(err => console.log("Delete err", err))
})

// Get Places info 
router.get('/show/:_id', (req, res, next) => {
    const id = req.params._id
    place.findById(id)
        .then(show => res.render('places/show', { places: show }))
        .catch(err => console.log(err))
})

// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
    place.find()
        .then(api => res.status(200).json({ all: api }))
        .catch(err => console.log(err))
})


/// Aun no se para que sirve este de abajo?? puede que sirva para Ajax?? por el filtrado ??

// // to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
// router.get('/api/:id', (req, res, next) => {
//     let restaurantId = req.params.id;
//     Restaurant.findOne({ _id: restaurantId }, (error, oneRestaurantFromDB) => {
//         if (error) {
//             next(error)
//         } else {
//             res.status(200).json({ restaurant: oneRestaurantFromDB });
//         }
//     });
// });


module.exports = router
