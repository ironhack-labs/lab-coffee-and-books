const router = require("express").Router();
const User = require("../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {


  User
    .find()
    .then((x) => {
      res.render("index", { x })
    })
    .catch((err) => console.log("there was an herror", err))



});

router.get("/details/:id", (req, res, next) => {


  User
    .findById(req.params.id)
    .then((x) => {
      res.render("../views/crud/location-details", { x })
    })



});


router.get("/:id/edit", (req, res, next) => {

  User
    .findById(req.params.id)
    .then((x) => {
      res.render("../views/crud/edit", { x })
    })




})


router.post("/:id/edit", (req, res, next) => {
  const { name, businessType } = req.body
  User
    .findByIdAndUpdate(req.params.id, { name, businessType })
    .then((x) => {
      res.redirect(`/details/${req.params.id}`)
    })




})



router.post("/:id/delete", (req, res, next) => {
  console.log(req.params.id)
  User
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect(`/`)
    })


})



router.get("/create", (req, res, next) => {
  res.render("../views/crud/create")
})

router.post("/create", (req, res, next) => {
  const { name, businessType } = req.body

  User
    .create({ name, businessType })
    .then((x) => res.redirect("/"))



})


router.get("/maps/map", (req, res, next) => {
  res.render("../views/map")
})




module.exports = router;
