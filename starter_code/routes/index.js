const express = require("express");
const router = express.Router();
const Place = require("../models/place");

/* GET home page. */
router.get("/", (req, res, next) => {
    Place.find((error, places) => {
        if (error) {
            next(error);
        } else {
            res.render("places/index", { places });
        }
    });
});

router.post("/", (req, res, next) => {
    let location = {
        type: "Point",
        coordinates: [req.body.longitude, req.body.latitude]
    };
    const newPlace = new Place({
        name: req.body.name,
        type: req.body.type,
        location: location
    });
    newPlace.save(error => {
        if (error) {
            next(error);
        } else {
            res.redirect("/");
        }
    });
});

router.get("/api", (req, res, next) => {
    Place.find((error, places) => {
        if (error) {
            next(error);
        } else {
            res.status(200).json({ places });
        }
    });
});

router.get("/api/:id", (req, res, next) => {
    let placeId = req.params.id;
    Place.findOne({ _id: placeId }, (error, place) => {
        if (error) {
            next(error);
        } else {
            res.status(200).json({ place });
        }
    });
});

router.get("/new", (req, res, next) => {
    res.render("places/new");
});

router.get("/:place_id", (req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
        if (error) {
            next(error);
        } else {
            res.render("places/show", { place });
        }
    });
});

router.post("/:place_id", (req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
        if (error) {
            next(error);
        } else {
            place.name = req.body.name;
            place.type = req.body.type;
            place.save(error => {
                if (error) {
                    next(error);
                } else {
                    res.redirect("/");
                }
            });
        }
    });
});

router.get("/:place_id/edit", (req, res, next) => {
    Place.findById(req.params.place_id, (error, place) => {
        if (error) {
            next(error);
        } else {
            res.render("places/update", { place });
        }
    });
});

router.get("/:place_id/delete", (req, res, next) => {
    Place.remove({ _id: req.params.place_id }, function(error, place) {
        if (error) {
            next(error);
        } else {
            res.redirect("/");
        }
    });
});

module.exports = router;
