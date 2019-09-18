const router = require("express").Router();
const Places = require("./../models/Places.model");

// Render the view with the Google Map and sends
// all the Places stores in the collection Places
router.get("/", (req, res, next) => {
  Places.find().then(places => {
    res.render("places/index", { places });
  });
});

// Render the detail of a place
router.get("/detail/:id", (req, res, next) => {
  Places.findById(req.params.id).then(placeFound => {
    res.render("places/detail", { place: placeFound });
  });
});

// Render the view to create a new Place
router.get("/new", (req, res, next) => {
  res.render("places/new");
});

// Add a new place
router.post("/new", (req, res, next) => {
  let { name, type, lat, lng } = req.body;

  console.log("lat", lat);
  console.log("lng", lng);

  if (!name || !type) {
    res.redirect("/places/new");
    return;
  }

  Places.create({ name, type, location: { lat, lng } }).then(placeCreated => {
    res.redirect("/places");
    return;
  });
});

// Render the view to edit an existing place
router.get("/edit/:id", (req, res, next) => {
  Places.findById(req.params.id).then(placeFound => {
    res.render("places/edit", {
      place: placeFound,
      types: ["coffee shop", "bookstore"]
    });
  });
});

// Update a place
router.post("/edit", (req, res, next) => {
  let { name, type, _id, lat, lng } = req.body;

  type = type.toLowerCase()

  console.log("name", name)
  console.log("type", type)
  console.log("_id", _id)
  console.log("lat", lat)
  console.log("lng", lng)

  if (!name || !type || !_id || !lat || !lng) {
    res.redirect(`/places/edit/${_id}`);
    return;
  }

  console.log("validación chachi")

  Places.findByIdAndUpdate(_id, { name, type, location: { lat, lng } }).then(
    placeUpdated => {
      res.redirect(`/places/edit/${_id}`);
      return;
    }
  );
});

// Render the view to confirm the delete
router.get("/delete/:id", (req, res, next) => {
  Places.findById(req.params.id).then(placeFound => {
    res.render("places/delete", { place: placeFound });
  });
});

// Delete a place
router.post("/delete", (req, res, next) => {
  Places.findByIdAndDelete(req.body._id).then(placeDeleted => {
    res.redirect("/places");
  });
});

module.exports = router;
