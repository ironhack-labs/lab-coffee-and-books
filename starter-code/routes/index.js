const express = require('express');
const router = express.Router();
const Place = require("../models/placeModel")

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

// router.get('/places', (req, res, next) => {
//     Place
//         .find({ name: })
//         .then(places => res.json(places))
// });

router.post('/', (req, res, next) => {
    Place
        .create({
            name: req.body.name,
            type: req.body.type,
            location: {
                coordinates: [
                    req.body.longitude,
                    req.body.latitude
                ]
            }
        })
        .then(completedPlace => res.redirect("/"))
        .catch(error => {
            console.log(error);
        })
})


module.exports = router;