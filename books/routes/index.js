const router = require("express").Router();

const Places = require("../models/Places.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// New store

router.get("/tiendas", (req, res, next) => {
  res.render("places/new-places");
});

router.post("/tiendas", (req, res, next) => {
  const { name, type } = req.body;

  Places.create({ name, type })
    .then(() => res.redirect("/tiendas/listado"))
    .catch((err) => console.log(err));
});

// Books list

router.get("/tiendas/listado", (req, res, send) => {
  Places.find()
    .select("name type")
    .then((places) => res.render("places/list", { places }))
    .catch((err) => console.log(err));
});

// Edit places

router.get("/tiendas/:id", (req, res, next) => {
  const { id } = req.params;

  Places.findById(id).then((place) => res.render("places/new-places", place));
});

router.post("/tiendas/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, type } = req.body;

  Places.findByIdAndUpdate(id, { name, type }, { new: true })
    .then((placeUpdate) => res.redirect("/tiendas/listado"))
    .catch((err) => console.log(err));
});

// Details places

router.get("/tiendas/detalles/:id", (req, res, next) => {
  const { id } = req.params;

  Places.findById(id).then((place) => res.render("places/detail", place));
});

// Delete place

router.post("/tiendas/listado/eliminar/:id", (req, res, next) => {
  const { id } = req.params;

  Places.findByIdAndDelete(id)
    .then(() => res.redirect("/tiendas/listado"))
    .catch((err) => console.log(err));
});

module.exports = router;
