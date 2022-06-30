const router = require("express").Router();
const Place = require("./../models/place.model");
const checkTypePlace = require("./../utils/check-type-place");

/* GET home page */
router.get("/", (req, res, next) => {
    Place.find()
        .then(data => res.render("places/list-places", { data }))
        .catch(err => console.log(err));

});

/*Get Details*/
router.get("/details/:id", (req, res, next) => {
    Place.findById(req.params.id)
        .then(data => res.render("places/details-place", data))
        .catch(err => console.log(err))
})


/*Create Place*/
router.get("/create", (req, res, next) => {
    res.render("places/create-place");
});

router.post("/create", (req, res, next) => {
    const { name, type, lat, lon } = req.body;

    const newPlace = {
        name,
        type,
        location: {
            type: "Point",
            coordinates: [lat, lon]
        }

    }

    Place.create(newPlace)
        .then(result => {
            res.redirect("/places")
        })
        .catch(err => console.log(err));
});

/*Edit Place*/
router.get("/edit/:id", (req, res, next) => {
    Place.findById(req.params.id)
        .then(data => {
            const type = checkTypePlace(data);
            res.render("places/edit-place", { data, type })
        })
        .catch(err => console.log(err));

});

router.post("/edit/:id", (req, res, next) => {
    const { name, type, lat, lon } = req.body;

    const newPlace = {
        name,
        type,
        location: {
            type: "Point",
            coordinates: [lat, lon]
        }

    }

    Place.findByIdAndUpdate(req.params.id, newPlace)
        .then(result => {
            res.redirect("/places")
        })
        .catch(err => console.log(err));
});

/*Delete*/
router.post("/delete/:id", (req, res, next) => {
    Place.findByIdAndDelete(req.params.id)
        .then(res.redirect("/places"))
        .catch(err => console.log(err));
});


module.exports = router;
