const express = require('express');
const Place = require('../models/Place.model')
const router = express.Router();

/* GET home page */
router.get("/crear", (req, res, next) => {
    res.render("places/create");
});

router.post("/crear", (req, res, next) => {

    const { username, type, latitude, longitude } = req.body

    // console.log(req.body)

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ username, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))

})

router.get("/mapa", (req, res, next) => {
    res.render("places/map")
})

module.exports = router;
