const express = require('express');
const router = express.Router();
const Place = require('../models/Place'); // porque requerimos del modelo? Porque lo vamos a usar para su busqueda en la BD


// GET new
router.get("/new", (req, res, next) => {
    res.render("place/new");
})

// POST new
router.post("/new", (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;

    const location = {
        type: "Point",
        coordinates: [req.body.latitude, req.body.longitude]
    }

    const newPlace = new Place({
        name,
        description,
        location
    });

    newPlace.save()
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
})

/* GET home page */
router.get('/', (req, res, next) => {
    Place.find()
        .then(places => {
            res.render('index', JSON.stringify(places));
        })
});

module.exports = router;

