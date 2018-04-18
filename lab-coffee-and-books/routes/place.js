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

// GET edit
router.get("/edit/:id", (req, res, next) => {
    const id = req.params.id;

    Place.findOne({ _id: id })
        .then(place => {
            res.render("place/edit", { place })
        })
        .catch(err => {
            console.log(err);
        })
})

/* GET delete */
router.get("/delete/:id", (req, res, next) => {
    const id = req.params.id;

    Place.findByIdAndRemove(id)
        .then(() => {
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
        })
})


module.exports = router;

