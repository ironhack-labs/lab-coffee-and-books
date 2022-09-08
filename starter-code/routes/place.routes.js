const router = require("express").Router();
const Place = require("../models/place.model");
const checkTypePlace = require("../utils/check-type-place");



//List
router.get("/", (req, res, next) => {
  Place.find()
    .then(data => {
      // console.log(data)
      res.render("places/list-places", { data })
    })
    .catch(err => console.log(err));

});

/*Create Place*/
router.get("/create", (req, res, next) => {
  res.render("places/create-place");
});

router.post("/create", (req, res, next) => {
  const { name, type } = req.body;

  const newPlace = {
    name,
    type
    // location: {
    //   type: "Point",
    //   coordinates: [latitude, longitude]
    // }

  }

  Place.create(newPlace)
    .then(result => {
      res.redirect("/place")
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
  const { name, type } = req.body;

  const newPlace = {
    name,
    type
    // ,
    // location: {
    //   type: "Point",
    //   coordinates: [lat, lon]
    // }

  }

  Place.findByIdAndUpdate(req.params.id, newPlace)
    .then(result => {
      res.redirect("/place")
    })
    .catch(err => console.log(err));
});


// DELETE

router.post("/delete/:id", (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(res.redirect("/place"))
    .catch(err => console.log(err));
});


module.exports = router;







