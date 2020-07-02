const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))

// Google Maps y Geolocalización

// router.get('/api', (req, res, next) => {
//     Restaurant.find({})
//         .then(allRestaurantsFromDB => res.json({
//             restaurants: allRestaurantsFromDB
//         }))
//         .catch(err => next(err))
// });

// router.get('/api/:id', (req, res, next) => {

//     let restaurantId = req.params.id

//     Restaurant.findById(restaurantId)
//         .then(oneRestaurantFromDB => res.json({
//             restaurant: oneRestaurantFromDB
//         }))
//         .catch(err => next(err))
// })


// router.get('/:restaurant_id', (req, res, next) => {
//     Restaurant.findById(req.params.restaurant_id)
//         .then(restaurant => res.render('restaurants/show', {
//             restaurant: restaurant
//         }))
//         .catch(err => next(err))
// })

module.exports = router
