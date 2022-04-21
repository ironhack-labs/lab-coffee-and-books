const router = require("express").Router();
const Place = require("../models/place.model");

router.get("/places-data", (req, res) => {
    Place.find()
        .then((places) =>
            res.json(
                places.map((place) => {
                    return {
                        placeName: place.placeName,
                        placeType: place.type,
                        placeLocation: place.location,
                    };
                })
            )
        )
        .catch((err) => console.log(err));
});

module.exports = router;
