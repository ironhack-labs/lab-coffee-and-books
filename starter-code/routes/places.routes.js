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
router.get("/:id", (req, res, next) => {
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
  let { name, type } = req.body;

  if (!name || !type) {
    res.redirect("/places/new");
    return;
  }

  Places.create({ name, type }).then(placeCreated => {
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
  let {name, type, _id} = req.body

  console.log(name, type, _id)

  if (!name || !type) {
    res.redirect(`/places/edit/${_id}`)
    return
  }

  Places.findByIdAndUpdate(_id, {name, type})
  .then(placeUpdated => {
    res.redirect(`/places/${_id}`)
    return
  })
})

module.exports = router;
