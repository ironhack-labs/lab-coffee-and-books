const router = require ("express").Router()
const Places = require ("./../models/Places.model")

// Render the view with the Google Map and sends
// all the Places stores in the collection Places
router.get("/", (req, res, next) => {
  Places.find()
  .then(places => {
    res.render("places/index", {places})
  })
})

// Render the form to create a new Place
router.get("/new", (req, res, next) => {
  res.render("places/new")
})

// Add a new place
router.post("/new", (req, res, next) => {
  let {name, type} = req.body

  if (!name || !type) {
    res.redirect("/places/new")
    return
  }

  Places.create({ name, type })
  .then(placeCreated => {
    res.redirect("/places")
    return
  })
})

module.exports = router
