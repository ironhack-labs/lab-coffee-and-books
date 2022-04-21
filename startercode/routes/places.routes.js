const router = require("express").Router();
const Place = require("../models/place.model");


// AIzaSyD2-saNUPkqXmIO9crbLw5HHElULpoH7JI
// CREATE A NEW PLACE

router.get("/create", (req, res, next) => {
    res.render("places/create");
});

router.post("/create", (req, res, next) => {
    const { placeName, type, lat, lng } = req.body;

    const location = {
        type: "point",
        coordinates: [lat, lng],
    };

    Place.create({ placeName, type, location })
        .then(() => {
            res.redirect("/");
        })
        .catch();
});

// PLACE LIST

router.get("/place-list", (req, res, next) => {
    Place.find()
        .then((places) => {
            console.log(places)
            res.render("places/list", { places });
        })
        .catch((err) => console.log(err));
});

// EDIT A PLACE
// place/{{id}}/edit

router.get("/place/:id/edit", (req, res, next) => {
    const { id } = req.params;

    Place.findById(id)
        .then((place) => {
            res.render("places/edit", place);

            // res.render("books/edit-book", book);
        })
        .catch((err) => console.log(err));
});

router.post("/place/:id/edit", (req, res, next) => {
    const { id } = req.params;
    const { placeName, type, lat, lng } = req.body;

    const location = {
        type: "point",
        coordinates: [lat, lng],
    };

    Place.findByIdAndUpdate(id, { placeName, type, location })
        .then(() => {
            res.redirect("/place-list");
        })
        .catch((err) => console.log(err));
});
// DELETE A PLACE

router.post("/place/:id/delete", (req, res, next) => {
    const { id } = req.params;

    Place.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/place-list");
        })
        .catch((err) => console.log(err));
});

module.exports = router;
